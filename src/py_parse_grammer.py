from pyparsing import Group
from pyparsing import Literal
from pyparsing import Optional
from pyparsing import Or
from pyparsing import Suppress
from pyparsing import Word
from pyparsing import ZeroOrMore
from pyparsing import alphas
from pyparsing import nums

## Alias of a name
#  Can start with alphabet and can have numbers and underscore
alias = Word(alphas, alphas + nums + "_")
alias_enclosed = Suppress(Literal("(")) \
    + alias.setResultsName("alias") \
    + Suppress(Literal(")"))

## Name of port, interface or instance
#  Can start with alphabet and can have numbers and underscore
name = Word(alphas, alphas + nums + "_")
name_with_alias = name.setResultsName("port") \
    + Optional(alias_enclosed)

## Index of a port or signal
#  Can be a numer and enclosed in a square brace
index = Word(nums)
index_enclosed = Suppress(Literal("[")) \
    + index.setResultsName("index") \
    + Suppress(Literal("]"))

## Slice of a port or signal in the form "a:b"
#  Where both 'a' and 'b' are numbers and enclosed in a square brace
slice = index.setResultsName("left") \
    + Suppress(Literal(":")) \
    + index.setResultsName("right")
slice_enclosed = Suppress(Literal("[")) \
    + slice \
    + Suppress(Literal("]"))

## Simple port or signal mapping in the form "INST:intf.port(alias)[index|slice]"
#  Port is mandatory and the rest all are optional
simple_mapping = Group(Optional(name.setResultsName("instance") \
                       + Suppress(Literal(":"))) \
                       + Optional(name.setResultsName("interface") \
                       + Suppress(Literal("."))) \
                       + name_with_alias \
                       + Optional(slice_enclosed \
                       | index_enclosed)).setResultsName("simple_mapping", listAllMatches=True)

## Broadcast of port mappings separeted by '|'
#  and an optional '|' in the end (to support generated simple_mapping strings)
broadcast_mapping = simple_mapping \
    + ZeroOrMore(Suppress(Literal("|")) \
                 + simple_mapping) + Optional("|")

## Index slice mapping of the form "index|slice=broadcast_mapping"
#  Usually used for mapping signal indices and slices
index_slice_mapping = Group(Or([index.setResultsName("index"), slice]) \
                            + Suppress(Literal("=")) \
                            + broadcast_mapping \
                            ).setResultsName("index_slice_mapping", listAllMatches=True)

## Mixed mapping of signal indices and slices separated by ';'
#  and an optional ';' in the end (to support generated index_slice_mapping strings)
mixed_mapping = index_slice_mapping \
    + ZeroOrMore(Suppress(Literal(";")) \
                 + index_slice_mapping) + Optional(";")

## Port mappings can be broadcast mapping in case of scalars and vectors
#  and mixed mapping in case of vectors
port_mappings = mixed_mapping | broadcast_mapping


## Signal mapping of the form "signal=broadcast_maping|mixed_mapping"
#  Usually used for mapping interface signals of both scalar and vector types
signal_mapping = Group(name.setResultsName("signal") \
                       + Suppress(Literal("=")) \
                       + (broadcast_mapping \
                       | (Suppress(Literal("(")) \
                       + mixed_mapping \
                       + Suppress(Literal(")")) \
                       ))).setResultsName("signal_mapping", listAllMatches=True)

## Sinal mapping of interface signals separated by ';'
#  and an optional ';' in the end (to support generated signal_mapping strings)
signal_mappings = signal_mapping \
    + ZeroOrMore(Suppress(Literal(";")) \
                 + signal_mapping) + Optional(";")

## All mapping combined
#  port mappings for sideband ports and signal mappings for interfaces or sockets
all_mappings = signal_mappings | port_mappings