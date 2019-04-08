// PORT_A 
case1 = {
    'simple_mapping': [{
        'port': 'PORT_A'
    }]
};

// PORT_A|PORT_B|PORT_C 
case2 = {
    'simple_mapping': [{
        'port': 'PORT_A'
    }, {
        'port': 'PORT_B'
    }, {
        'port': 'PORT_C'
    }]
};

// 2=PORT_A2;1=PORT_A1;0=PORT_A0 
case3 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'port': 'PORT_A2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'port': 'PORT_A1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'port': 'PORT_A0'
        }]
    }]
};

// 2=PORT_A2|PORT_B2|PORT_C2;1=PORT_A1|PORT_B1|PORT_C1;0=PORT_A0|PORT_B0|PORT_C0 
case4 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'port': 'PORT_A2'
        }, {
            'port': 'PORT_B2'
        }, {
            'port': 'PORT_C2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'port': 'PORT_A1'
        }, {
            'port': 'PORT_B1'
        }, {
            'port': 'PORT_C1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'port': 'PORT_A0'
        }, {
            'port': 'PORT_B0'
        }, {
            'port': 'PORT_C0'
        }]
    }]
};

// sig_a=PORT_A;sig_b=PORT_B;sig_c=PORT_C 
case5 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'simple_mapping': [{
            'port': 'PORT_A'
        }]
    }, {
        'signal': 'sig_b',
        'simple_mapping': [{
            'port': 'PORT_B'
        }]
    }, {
        'signal': 'sig_c',
        'simple_mapping': [{
            'port': 'PORT_C'
        }]
    }]
};

// sig_a=PORT_A|PORT_AA|PORT_AAA;sig_b=PORT_B|PORT_BB|PORT_BBB;sig_c=PORT_C|PORT_CC|PORT_CCC 
case6 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'simple_mapping': [{
            'port': 'PORT_A'
        }, {
            'port': 'PORT_AA'
        }, {
            'port': 'PORT_AAA'
        }]
    }, {
        'signal': 'sig_b',
        'simple_mapping': [{
            'port': 'PORT_B'
        }, {
            'port': 'PORT_BB'
        }, {
            'port': 'PORT_BBB'
        }]
    }, {
        'signal': 'sig_c',
        'simple_mapping': [{
            'port': 'PORT_C'
        }, {
            'port': 'PORT_CC'
        }, {
            'port': 'PORT_CCC'
        }]
    }]
};

// sig_a=(2=PORT_A2;1=PORT_A1;0=PORT_A0);sig_b=(2=PORT_B2;1=PORT_B1;0=PORT_B0);sig_c=(2=PORT_C2;1=PORT_C1;0=PORT_C0); 
case7 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_A2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_A1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_A0'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_B2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_B1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_B0'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_C2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_C1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_C0'
            }]
        }]
    }]
};

// sig_a=(2=PORT_A2|PORT_AA2|PORT_AAA2;1=PORT_A1|PORT_AA1|PORT_AAA1;0=PORT_A0|PORT_AA0|PORT_AAA0);sig_b=(2=PORT_B2|PORT_BB2|PORT_BBB2;1=PORT_B1|PORT_BB1|PORT_BBB1;0=PORT_B0|PORT_BB0|PORT_BBB0);sig_c=(2=PORT_C2|PORT_CC2|PORT_CCC2;1=PORT_C1|PORT_CC1|PORT_CCC1;0=PORT_C0|PORT_CC0|PORT_CCC0) 
case8 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_A2'
            }, {
                'port': 'PORT_AA2'
            }, {
                'port': 'PORT_AAA2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_A1'
            }, {
                'port': 'PORT_AA1'
            }, {
                'port': 'PORT_AAA1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_A0'
            }, {
                'port': 'PORT_AA0'
            }, {
                'port': 'PORT_AAA0'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_B2'
            }, {
                'port': 'PORT_BB2'
            }, {
                'port': 'PORT_BBB2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_B1'
            }, {
                'port': 'PORT_BB1'
            }, {
                'port': 'PORT_BBB1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_B0'
            }, {
                'port': 'PORT_BB0'
            }, {
                'port': 'PORT_BBB0'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_C2'
            }, {
                'port': 'PORT_CC2'
            }, {
                'port': 'PORT_CCC2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_C1'
            }, {
                'port': 'PORT_CC1'
            }, {
                'port': 'PORT_CCC1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_C0'
            }, {
                'port': 'PORT_CC0'
            }, {
                'port': 'PORT_CCC0'
            }]
        }]
    }]
};

// 2=PORT_A2;1=PORT_A1;0=PORT_A0; 
case9 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'port': 'PORT_A2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'port': 'PORT_A1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'port': 'PORT_A0'
        }]
    }]
};

// 2=PORT_A2|PORT_B2|PORT_C2;1=PORT_A1|PORT_B1|PORT_C1;0=PORT_A0|PORT_B0|PORT_C0; 
case10 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'port': 'PORT_A2'
        }, {
            'port': 'PORT_B2'
        }, {
            'port': 'PORT_C2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'port': 'PORT_A1'
        }, {
            'port': 'PORT_B1'
        }, {
            'port': 'PORT_C1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'port': 'PORT_A0'
        }, {
            'port': 'PORT_B0'
        }, {
            'port': 'PORT_C0'
        }]
    }]
};

// sig_a=PORT_A;sig_b=PORT_B;sig_c=PORT_C; 
case11 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'simple_mapping': [{
            'port': 'PORT_A'
        }]
    }, {
        'signal': 'sig_b',
        'simple_mapping': [{
            'port': 'PORT_B'
        }]
    }, {
        'signal': 'sig_c',
        'simple_mapping': [{
            'port': 'PORT_C'
        }]
    }]
};

// sig_a=PORT_A|PORT_AA|PORT_AAA;sig_b=PORT_B|PORT_BB|PORT_BBB;sig_c=PORT_C|PORT_CC|PORT_CCC; 
case12 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'simple_mapping': [{
            'port': 'PORT_A'
        }, {
            'port': 'PORT_AA'
        }, {
            'port': 'PORT_AAA'
        }]
    }, {
        'signal': 'sig_b',
        'simple_mapping': [{
            'port': 'PORT_B'
        }, {
            'port': 'PORT_BB'
        }, {
            'port': 'PORT_BBB'
        }]
    }, {
        'signal': 'sig_c',
        'simple_mapping': [{
            'port': 'PORT_C'
        }, {
            'port': 'PORT_CC'
        }, {
            'port': 'PORT_CCC'
        }]
    }]
};

// sig_a=(2=PORT_A2;1=PORT_A1;0=PORT_A0;);sig_b=(2=PORT_B2;1=PORT_B1;0=PORT_B0;);sig_c=(2=PORT_C2;1=PORT_C1;0=PORT_C0;); 
case13 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_A2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_A1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_A0'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_B2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_B1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_B0'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_C2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_C1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_C0'
            }]
        }]
    }]
};

// sig_a=(2=PORT_A2|PORT_AA2|PORT_AAA2;1=PORT_A1|PORT_AA1|PORT_AAA1;0=PORT_A0|PORT_AA0|PORT_AAA0;);sig_b=(2=PORT_B2|PORT_BB2|PORT_BBB2;1=PORT_B1|PORT_BB1|PORT_BBB1;0=PORT_B0|PORT_BB0|PORT_BBB0;);sig_c=(2=PORT_C2|PORT_CC2|PORT_CCC2;1=PORT_C1|PORT_CC1|PORT_CCC1;0=PORT_C0|PORT_CC0|PORT_CCC0;); 
case14 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_A2'
            }, {
                'port': 'PORT_AA2'
            }, {
                'port': 'PORT_AAA2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_A1'
            }, {
                'port': 'PORT_AA1'
            }, {
                'port': 'PORT_AAA1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_A0'
            }, {
                'port': 'PORT_AA0'
            }, {
                'port': 'PORT_AAA0'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_B2'
            }, {
                'port': 'PORT_BB2'
            }, {
                'port': 'PORT_BBB2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_B1'
            }, {
                'port': 'PORT_BB1'
            }, {
                'port': 'PORT_BBB1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_B0'
            }, {
                'port': 'PORT_BB0'
            }, {
                'port': 'PORT_BBB0'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_C2'
            }, {
                'port': 'PORT_CC2'
            }, {
                'port': 'PORT_CCC2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'port': 'PORT_C1'
            }, {
                'port': 'PORT_CC1'
            }, {
                'port': 'PORT_CCC1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'port': 'PORT_C0'
            }, {
                'port': 'PORT_CC0'
            }, {
                'port': 'PORT_CCC0'
            }]
        }]
    }]
};

// intf.PORT_A 
case15 = {
    'simple_mapping': [{
        'interface': 'intf',
        'port': 'PORT_A'
    }]
};

// intf.PORT_A|intf.PORT_B|intf.PORT_C 
case16 = {
    'simple_mapping': [{
        'interface': 'intf',
        'port': 'PORT_A'
    }, {
        'interface': 'intf',
        'port': 'PORT_B'
    }, {
        'interface': 'intf',
        'port': 'PORT_C'
    }]
};

// 2=intf.PORT_A2;1=intf.PORT_A1;0=intf.PORT_A0 
case17 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A0'
        }]
    }]
};

// 2=intf.PORT_A2|intf.PORT_B2|intf.PORT_C2;1=intf.PORT_A1|intf.PORT_B1|intf.PORT_C1;0=intf.PORT_A0|intf.PORT_B0|intf.PORT_C0 
case18 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A2'
        }, {
            'interface': 'intf',
            'port': 'PORT_B2'
        }, {
            'interface': 'intf',
            'port': 'PORT_C2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A1'
        }, {
            'interface': 'intf',
            'port': 'PORT_B1'
        }, {
            'interface': 'intf',
            'port': 'PORT_C1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A0'
        }, {
            'interface': 'intf',
            'port': 'PORT_B0'
        }, {
            'interface': 'intf',
            'port': 'PORT_C0'
        }]
    }]
};

// sig_a=intf.PORT_A;sig_b=intf.PORT_B;sig_c=intf.PORT_C 
case19 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A'
        }]
    }, {
        'signal': 'sig_b',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_B'
        }]
    }, {
        'signal': 'sig_c',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_C'
        }]
    }]
};

// sig_a=intf.PORT_A|intf.PORT_AA|intf.PORT_AAA;sig_b=intf.PORT_B|intf.PORT_BB|intf.PORT_BBB;sig_c=intf.PORT_C|intf.PORT_CC|intf.PORT_CCC 
case20 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A'
        }, {
            'interface': 'intf',
            'port': 'PORT_AA'
        }, {
            'interface': 'intf',
            'port': 'PORT_AAA'
        }]
    }, {
        'signal': 'sig_b',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_B'
        }, {
            'interface': 'intf',
            'port': 'PORT_BB'
        }, {
            'interface': 'intf',
            'port': 'PORT_BBB'
        }]
    }, {
        'signal': 'sig_c',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_C'
        }, {
            'interface': 'intf',
            'port': 'PORT_CC'
        }, {
            'interface': 'intf',
            'port': 'PORT_CCC'
        }]
    }]
};

// sig_a=(2=intf.PORT_A2;1=intf.PORT_A1;0=intf.PORT_A0);sig_b=(2=intf.PORT_B2;1=intf.PORT_B1;0=intf.PORT_B0);sig_c=(2=intf.PORT_C2;1=intf.PORT_C1;0=intf.PORT_C0); 
case21 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A0'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B0'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C0'
            }]
        }]
    }]
};

// sig_a=(2=intf.PORT_A2|intf.PORT_AA2|intf.PORT_AAA2;1=intf.PORT_A1|intf.PORT_AA1|intf.PORT_AAA1;0=intf.PORT_A0|intf.PORT_AA0|intf.PORT_AAA0);sig_b=(2=intf.PORT_B2|intf.PORT_BB2|intf.PORT_BBB2;1=intf.PORT_B1|intf.PORT_BB1|intf.PORT_BBB1;0=intf.PORT_B0|intf.PORT_BB0|intf.PORT_BBB0);sig_c=(2=intf.PORT_C2|intf.PORT_CC2|intf.PORT_CCC2;1=intf.PORT_C1|intf.PORT_CC1|intf.PORT_CCC1;0=intf.PORT_C0|intf.PORT_CC0|intf.PORT_CCC0) 
case22 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A2'
            }, {
                'interface': 'intf',
                'port': 'PORT_AA2'
            }, {
                'interface': 'intf',
                'port': 'PORT_AAA2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A1'
            }, {
                'interface': 'intf',
                'port': 'PORT_AA1'
            }, {
                'interface': 'intf',
                'port': 'PORT_AAA1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A0'
            }, {
                'interface': 'intf',
                'port': 'PORT_AA0'
            }, {
                'interface': 'intf',
                'port': 'PORT_AAA0'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B2'
            }, {
                'interface': 'intf',
                'port': 'PORT_BB2'
            }, {
                'interface': 'intf',
                'port': 'PORT_BBB2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B1'
            }, {
                'interface': 'intf',
                'port': 'PORT_BB1'
            }, {
                'interface': 'intf',
                'port': 'PORT_BBB1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B0'
            }, {
                'interface': 'intf',
                'port': 'PORT_BB0'
            }, {
                'interface': 'intf',
                'port': 'PORT_BBB0'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C2'
            }, {
                'interface': 'intf',
                'port': 'PORT_CC2'
            }, {
                'interface': 'intf',
                'port': 'PORT_CCC2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C1'
            }, {
                'interface': 'intf',
                'port': 'PORT_CC1'
            }, {
                'interface': 'intf',
                'port': 'PORT_CCC1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C0'
            }, {
                'interface': 'intf',
                'port': 'PORT_CC0'
            }, {
                'interface': 'intf',
                'port': 'PORT_CCC0'
            }]
        }]
    }]
};

// 2=intf.PORT_A2;1=intf.PORT_A1;0=intf.PORT_A0; 
case23 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A0'
        }]
    }]
};

// 2=intf.PORT_A2|intf.PORT_B2|intf.PORT_C2;1=intf.PORT_A1|intf.PORT_B1|intf.PORT_C1;0=intf.PORT_A0|intf.PORT_B0|intf.PORT_C0; 
case24 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A2'
        }, {
            'interface': 'intf',
            'port': 'PORT_B2'
        }, {
            'interface': 'intf',
            'port': 'PORT_C2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A1'
        }, {
            'interface': 'intf',
            'port': 'PORT_B1'
        }, {
            'interface': 'intf',
            'port': 'PORT_C1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A0'
        }, {
            'interface': 'intf',
            'port': 'PORT_B0'
        }, {
            'interface': 'intf',
            'port': 'PORT_C0'
        }]
    }]
};

// sig_a=intf.PORT_A;sig_b=intf.PORT_B;sig_c=intf.PORT_C; 
case25 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A'
        }]
    }, {
        'signal': 'sig_b',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_B'
        }]
    }, {
        'signal': 'sig_c',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_C'
        }]
    }]
};

// sig_a=intf.PORT_A|PORT_AA|intf.PORT_AAA;sig_b=intf.PORT_B|intf.PORT_BB|intf.PORT_BBB;sig_c=intf.PORT_C|intf.PORT_CC|intf.PORT_CCC; 
case26 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_A'
        }, {
            'port': 'PORT_AA'
        }, {
            'interface': 'intf',
            'port': 'PORT_AAA'
        }]
    }, {
        'signal': 'sig_b',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_B'
        }, {
            'interface': 'intf',
            'port': 'PORT_BB'
        }, {
            'interface': 'intf',
            'port': 'PORT_BBB'
        }]
    }, {
        'signal': 'sig_c',
        'simple_mapping': [{
            'interface': 'intf',
            'port': 'PORT_C'
        }, {
            'interface': 'intf',
            'port': 'PORT_CC'
        }, {
            'interface': 'intf',
            'port': 'PORT_CCC'
        }]
    }]
};

// sig_a=(2=intf.PORT_A2;1=intf.PORT_A1;0=intf.PORT_A0;);sig_b=(2=intf.PORT_B2;1=intf.PORT_B1;0=intf.PORT_B0;);sig_c=(2=intf.PORT_C2;1=intf.PORT_C1;0=intf.PORT_C0;); 
case27 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A0'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B0'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C0'
            }]
        }]
    }]
};

// sig_a=(2=intf.PORT_A2|intf.PORT_AA2|intf.PORT_AAA2;1=intf.PORT_A1|intf.PORT_AA1|intf.PORT_AAA1;0=intf.PORT_A0|intf.PORT_AA0|intf.PORT_AAA0;);sig_b=(2=intf.PORT_B2|intf.PORT_BB2|intf.PORT_BBB2;1=intf.PORT_B1|intf.PORT_BB1|PORT_BBB1;0=intf.PORT_B0|intf.PORT_BB0|intf.PORT_BBB0;);sig_c=(2=PORT_C2|intf.PORT_CC2|intf.PORT_CCC2;1=intf.PORT_C1|intf.PORT_CC1|intf.PORT_CCC1;0=intf.PORT_C0|intf.PORT_CC0|intf.PORT_CCC0;); 
case28 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A2'
            }, {
                'interface': 'intf',
                'port': 'PORT_AA2'
            }, {
                'interface': 'intf',
                'port': 'PORT_AAA2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A1'
            }, {
                'interface': 'intf',
                'port': 'PORT_AA1'
            }, {
                'interface': 'intf',
                'port': 'PORT_AAA1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_A0'
            }, {
                'interface': 'intf',
                'port': 'PORT_AA0'
            }, {
                'interface': 'intf',
                'port': 'PORT_AAA0'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B2'
            }, {
                'interface': 'intf',
                'port': 'PORT_BB2'
            }, {
                'interface': 'intf',
                'port': 'PORT_BBB2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B1'
            }, {
                'interface': 'intf',
                'port': 'PORT_BB1'
            }, {
                'port': 'PORT_BBB1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_B0'
            }, {
                'interface': 'intf',
                'port': 'PORT_BB0'
            }, {
                'interface': 'intf',
                'port': 'PORT_BBB0'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'port': 'PORT_C2'
            }, {
                'interface': 'intf',
                'port': 'PORT_CC2'
            }, {
                'interface': 'intf',
                'port': 'PORT_CCC2'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C1'
            }, {
                'interface': 'intf',
                'port': 'PORT_CC1'
            }, {
                'interface': 'intf',
                'port': 'PORT_CCC1'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'port': 'PORT_C0'
            }, {
                'interface': 'intf',
                'port': 'PORT_CC0'
            }, {
                'interface': 'intf',
                'port': 'PORT_CCC0'
            }]
        }]
    }]
};

// 2=PORT_A[2];1=PORT_A[1];0=PORT_A[0] 
case29 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'index': '2',
            'port': 'PORT_A'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'index': '1',
            'port': 'PORT_A'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'index': '0',
            'port': 'PORT_A'
        }]
    }]
};

// 2=PORT_A[2]|PORT_B[2]|PORT_C2;1=PORT_A[1]|PORT_B[1]|PORT_C1;0=PORT_A[0]|PORT_B[0]|PORT_C[0] 
case30 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'index': '2',
            'port': 'PORT_A'
        }, {
            'index': '2',
            'port': 'PORT_B'
        }, {
            'port': 'PORT_C2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'index': '1',
            'port': 'PORT_A'
        }, {
            'index': '1',
            'port': 'PORT_B'
        }, {
            'port': 'PORT_C1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'index': '0',
            'port': 'PORT_A'
        }, {
            'index': '0',
            'port': 'PORT_B'
        }, {
            'index': '0',
            'port': 'PORT_C'
        }]
    }]
};

// sig_a=(2=PORT_A[2];1=PORT_A[1];0=PORT_A[0]);sig_b=(2=PORT_B[2];1=PORT_B[1];0=PORT_B[0]);sig_c=(2=PORT_C[2];1=PORT_C[1];0=PORT_C[0]); 
case31 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_A'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_A'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_A'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_B'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_B'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_B'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_C'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_C'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_C'
            }]
        }]
    }]
};

// sig_a=(2=PORT_A[2]|PORT_AA[2]|PORT_AAA[2];1=PORT_A[1]|PORT_AA[1]|PORT_AAA[1];0=PORT_A[0]|PORT_AA[0]|PORT_AAA[0]);sig_b=(2=PORT_B[2]|PORT_BB[2]|PORT_BBB[2];1=PORT_B[1]|PORT_BB[1]|PORT_BBB[1];0=PORT_B[0]|PORT_BB[0]|PORT_BBB[0]);sig_c=(2=PORT_C[2]|PORT_CC[2]|PORT_CCC[2];1=PORT_C[1]|PORT_CC[1]|PORT_CCC[1];0=PORT_C[0]|PORT_CC[0]|PORT_CCC[0]) 
case32 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_A'
            }, {
                'index': '2',
                'port': 'PORT_AA'
            }, {
                'index': '2',
                'port': 'PORT_AAA'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_A'
            }, {
                'index': '1',
                'port': 'PORT_AA'
            }, {
                'index': '1',
                'port': 'PORT_AAA'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_A'
            }, {
                'index': '0',
                'port': 'PORT_AA'
            }, {
                'index': '0',
                'port': 'PORT_AAA'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_B'
            }, {
                'index': '2',
                'port': 'PORT_BB'
            }, {
                'index': '2',
                'port': 'PORT_BBB'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_B'
            }, {
                'index': '1',
                'port': 'PORT_BB'
            }, {
                'index': '1',
                'port': 'PORT_BBB'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_B'
            }, {
                'index': '0',
                'port': 'PORT_BB'
            }, {
                'index': '0',
                'port': 'PORT_BBB'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_C'
            }, {
                'index': '2',
                'port': 'PORT_CC'
            }, {
                'index': '2',
                'port': 'PORT_CCC'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_C'
            }, {
                'index': '1',
                'port': 'PORT_CC'
            }, {
                'index': '1',
                'port': 'PORT_CCC'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_C'
            }, {
                'index': '0',
                'port': 'PORT_CC'
            }, {
                'index': '0',
                'port': 'PORT_CCC'
            }]
        }]
    }]
};

// 2=PORT_A[2];1=PORT_A[1];0=PORT_A[0]; 
case33 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'index': '2',
            'port': 'PORT_A'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'index': '1',
            'port': 'PORT_A'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'index': '0',
            'port': 'PORT_A'
        }]
    }]
};

// 2=PORT_A[2]|PORT_B[2]|PORT_C2;1=PORT_A[1]|PORT_B[1]|PORT_C1;0=PORT_A[0]|PORT_B[0]|PORT_C[0]; 
case34 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'index': '2',
            'port': 'PORT_A'
        }, {
            'index': '2',
            'port': 'PORT_B'
        }, {
            'port': 'PORT_C2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'index': '1',
            'port': 'PORT_A'
        }, {
            'index': '1',
            'port': 'PORT_B'
        }, {
            'port': 'PORT_C1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'index': '0',
            'port': 'PORT_A'
        }, {
            'index': '0',
            'port': 'PORT_B'
        }, {
            'index': '0',
            'port': 'PORT_C'
        }]
    }]
};

// sig_a=(2=PORT_A[2];1=PORT_A[1];0=PORT_A[0];);sig_b=(2=PORT_B[2];1=PORT_B[1];0=PORT_B[0];);sig_c=(2=PORT_C[2];1=PORT_C[1];0=PORT_C[0];); 
case35 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_A'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_A'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_A'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_B'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_B'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_B'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_C'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_C'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_C'
            }]
        }]
    }]
};

// sig_a=(2=PORT_A[2]|PORT_AA[2]|PORT_AAA[2];1=PORT_A[1]|PORT_AA[1]|PORT_AAA[1];0=PORT_A[0]|PORT_AA[0]|PORT_AAA[0];);sig_b=(2=PORT_B[2]|PORT_BB[2]|PORT_BBB[2];1=PORT_B[1]|PORT_BB[1]|PORT_BBB[1];0=PORT_B[0]|PORT_BB[0]|PORT_BBB[0];);sig_c=(2=PORT_C[2]|PORT_CC[2]|PORT_CCC[2];1=PORT_C[1]|PORT_CC[1]|PORT_CCC[1];0=PORT_C[0]|PORT_CC[0]|PORT_CCC[0];); 
case36 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_A'
            }, {
                'index': '2',
                'port': 'PORT_AA'
            }, {
                'index': '2',
                'port': 'PORT_AAA'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_A'
            }, {
                'index': '1',
                'port': 'PORT_AA'
            }, {
                'index': '1',
                'port': 'PORT_AAA'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_A'
            }, {
                'index': '0',
                'port': 'PORT_AA'
            }, {
                'index': '0',
                'port': 'PORT_AAA'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_B'
            }, {
                'index': '2',
                'port': 'PORT_BB'
            }, {
                'index': '2',
                'port': 'PORT_BBB'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_B'
            }, {
                'index': '1',
                'port': 'PORT_BB'
            }, {
                'index': '1',
                'port': 'PORT_BBB'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_B'
            }, {
                'index': '0',
                'port': 'PORT_BB'
            }, {
                'index': '0',
                'port': 'PORT_BBB'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_C'
            }, {
                'index': '2',
                'port': 'PORT_CC'
            }, {
                'index': '2',
                'port': 'PORT_CCC'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_C'
            }, {
                'index': '1',
                'port': 'PORT_CC'
            }, {
                'index': '1',
                'port': 'PORT_CCC'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_C'
            }, {
                'index': '0',
                'port': 'PORT_CC'
            }, {
                'index': '0',
                'port': 'PORT_CCC'
            }]
        }]
    }]
};

// 2=intf.PORT_A[2];1=intf.PORT_A[1];0=intf.PORT_A[0] 
case37 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '2',
            'port': 'PORT_A'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '1',
            'port': 'PORT_A'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '0',
            'port': 'PORT_A'
        }]
    }]
};

// 2=intf.PORT_A[2]|intf.PORT_B[2]|intf.PORT_C2;1=intf.PORT_A[1]|intf.PORT_B[1]|intf.PORT_C1;0=intf.PORT_A[0]|intf.PORT_B[0]|intf.PORT_C[0] 
case38 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '2',
            'port': 'PORT_A'
        }, {
            'interface': 'intf',
            'index': '2',
            'port': 'PORT_B'
        }, {
            'interface': 'intf',
            'port': 'PORT_C2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '1',
            'port': 'PORT_A'
        }, {
            'interface': 'intf',
            'index': '1',
            'port': 'PORT_B'
        }, {
            'interface': 'intf',
            'port': 'PORT_C1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '0',
            'port': 'PORT_A'
        }, {
            'interface': 'intf',
            'index': '0',
            'port': 'PORT_B'
        }, {
            'interface': 'intf',
            'index': '0',
            'port': 'PORT_C'
        }]
    }]
};

// sig_a=(2=intf.PORT_A[2];1=intf.PORT_A[1];0=intf.PORT_A[0]);sig_b=(2=PORT_B[2];1=PORT_B[1];0=PORT_B[0]);sig_c=(2=PORT_C[2];1=PORT_C[1];0=PORT_C[0]); 
case39 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_A'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_A'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_A'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_B'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_B'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_B'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'index': '2',
                'port': 'PORT_C'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'index': '1',
                'port': 'PORT_C'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_C'
            }]
        }]
    }]
};

// sig_a=(2=intf.PORT_A[2]|intf.PORT_AA[2]|intf.PORT_AAA[2];1=intf.PORT_A[1]|PORT_AA[1]|PORT_AAA[1];0=PORT_A[0]|PORT_AA[0]|PORT_AAA[0]);sig_b=(2=intf.PORT_B[2]|intf.PORT_BB[2]|intf.PORT_BBB[2];1=intf.PORT_B[1]|intf.PORT_BB[1]|intf.PORT_BBB[1];0=intf.PORT_B[0]|intf.PORT_BB[0]|intf.PORT_BBB[0]);sig_c=(2=intf.PORT_C[2]|intf.PORT_CC[2]|intf.PORT_CCC[2];1=intf.PORT_C[1]|intf.PORT_CC[1]|intf.PORT_CCC[1];0=intf.PORT_C[0]|intf.PORT_CC[0]|intf.PORT_CCC[0]) 
case40 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_A'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_AA'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_AAA'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_A'
            }, {
                'index': '1',
                'port': 'PORT_AA'
            }, {
                'index': '1',
                'port': 'PORT_AAA'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'index': '0',
                'port': 'PORT_A'
            }, {
                'index': '0',
                'port': 'PORT_AA'
            }, {
                'index': '0',
                'port': 'PORT_AAA'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_B'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_BB'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_BBB'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_B'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_BB'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_BBB'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_B'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_BB'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_BBB'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_C'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_CC'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_CCC'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_C'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_CC'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_CCC'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_C'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_CC'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_CCC'
            }]
        }]
    }]
};

// 2=intf.PORT_A[2];1=intf.PORT_A[1];0=intf.PORT_A[0]; 
case41 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '2',
            'port': 'PORT_A'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '1',
            'port': 'PORT_A'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '0',
            'port': 'PORT_A'
        }]
    }]
};

// 2=intf.PORT_A[2]|intf.PORT_B[2]|intf.PORT_C2;1=intf.PORT_A[1]|intf.PORT_B[1]|intf.PORT_C1;0=intf.PORT_A[0]|intf.PORT_B[0]|intf.PORT_C[0]; 
case42 = {
    'index_slice_mapping': [{
        'index': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '2',
            'port': 'PORT_A'
        }, {
            'interface': 'intf',
            'index': '2',
            'port': 'PORT_B'
        }, {
            'interface': 'intf',
            'port': 'PORT_C2'
        }]
    }, {
        'index': '1',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '1',
            'port': 'PORT_A'
        }, {
            'interface': 'intf',
            'index': '1',
            'port': 'PORT_B'
        }, {
            'interface': 'intf',
            'port': 'PORT_C1'
        }]
    }, {
        'index': '0',
        'simple_mapping': [{
            'interface': 'intf',
            'index': '0',
            'port': 'PORT_A'
        }, {
            'interface': 'intf',
            'index': '0',
            'port': 'PORT_B'
        }, {
            'interface': 'intf',
            'index': '0',
            'port': 'PORT_C'
        }]
    }]
};

// sig_a=(2=intf.PORT_A[2];1=intf.PORT_A[1];0=intf.PORT_A[0];);sig_b=(2=intf.PORT_B[2];1=intf.PORT_B[1];0=intf.PORT_B[0];);sig_c=(2=intf.PORT_C[2];1=intf.PORT_C[1];0=intf.PORT_C[0];); 
case43 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_A'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_A'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_A'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_B'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_B'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_B'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_C'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_C'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_C'
            }]
        }]
    }]
};

// sig_a=(2=intf.PORT_A[2]|intf.PORT_AA[2]|intf.PORT_AAA[2];1=intf.PORT_A[1]|intf.PORT_AA[1]|intf.PORT_AAA[1];0=intf.PORT_A[0]|intf.PORT_AA[0]|intf.PORT_AAA[0];);sig_b=(2=intf.PORT_B[2]|intf.PORT_BB[2]|intf.PORT_BBB[2];1=intf.PORT_B[1]|intf.PORT_BB[1]|intf.PORT_BBB[1];0=intf.PORT_B[0]|intf.PORT_BB[0]|intf.PORT_BBB[0];);sig_c=(2=intf.PORT_C[2]|intf.PORT_CC[2]|intf.PORT_CCC[2];1=intf.PORT_C[1]|intf.PORT_CC[1]|intf.PORT_CCC[1];0=intf.PORT_C[0]|intf.PORT_CC[0]|intf.PORT_CCC[0];); 
case44 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_A'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_AA'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_AAA'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_A'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_AA'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_AAA'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_A'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_AA'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_AAA'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_B'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_BB'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_BBB'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_B'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_BB'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_BBB'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_B'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_BB'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_BBB'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'index': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_C'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_CC'
            }, {
                'interface': 'intf',
                'index': '2',
                'port': 'PORT_CCC'
            }]
        }, {
            'index': '1',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_C'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_CC'
            }, {
                'interface': 'intf',
                'index': '1',
                'port': 'PORT_CCC'
            }]
        }, {
            'index': '0',
            'simple_mapping': [{
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_C'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_CC'
            }, {
                'interface': 'intf',
                'index': '0',
                'port': 'PORT_CCC'
            }]
        }]
    }]
};

// 2:0=PORT_A[2:0] 
case45 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=PORT_A[2:0]|PORT_B[7:5]|PORT_C[15:13] 
case46 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=PORT_A[2:0]);sig_b=(2:0=PORT_B[2:0]);sig_c=(2:0=PORT_C[2:0]) 
case47 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=PORT_A[2:0]|PORT_AA[2:0]|PORT_AAA[2:0]);sig_b=(2:0=PORT_B[2:0]|PORT_BB[2:0]|PORT_BBB[2:0]);sig_c=(2:0=PORT_C[2:0]|PORT_CC[2:0]|PORT_CCC[2:0]) 
case48 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=PORT_A[2:0] 
case49 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=PORT_A[2:0]|PORT_B[7:5]|PORT_C[15:13] 
case50 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=PORT_A[2:0]);sig_b=(2:0=PORT_B[2:0]);sig_c=(2:0=PORT_C[2:0]) 
case51 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=PORT_A[2:0]|PORT_AA[2:0]|PORT_AAA[2:0]);sig_b=(2:0=PORT_B[2:0]|PORT_BB[2:0]|PORT_BBB[2:0]);sig_c=(2:0=PORT_C[2:0]|PORT_CC[2:0]|PORT_CCC[2:0]) 
case52 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=PORT_A[2:0] 
case53 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=PORT_A[2:0]|PORT_B[7:5]|PORT_C[15:13] 
case54 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=PORT_A[2:0]);sig_b=(2:0=PORT_B[2:0]);sig_c=(2:0=PORT_C[2:0]) 
case55 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=PORT_A[2:0]|PORT_AA[2:0]|PORT_AAA[2:0]);sig_b=(2:0=PORT_B[2:0]|PORT_BB[2:0]|PORT_BBB[2:0]);sig_c=(2:0=PORT_C[2:0]|PORT_CC[2:0]|PORT_CCC[2:0]) 
case56 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=intf.PORT_A[2:0] 
case57 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=intf.PORT_A[2:0]|intf.PORT_B[7:5]|intf.PORT_C[15:13] 
case58 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'interface': 'intf',
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'interface': 'intf',
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=intf.PORT_A[2:0]);sig_b=(2:0=intf.PORT_B[2:0]);sig_c=(2:0=intf.PORT_C[2:0]) 
case59 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=intf.PORT_A[2:0]|intf.PORT_AA[2:0]|intf.PORT_AAA[2:0]);sig_b=(2:0=intf.PORT_B[2:0]|intf.PORT_BB[2:0]|intf.PORT_BBB[2:0]);sig_c=(2:0=intf.PORT_C[2:0]|intf.PORT_CC[2:0]|intf.PORT_CCC[2:0]) 
case60 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=PORT_A(port_a_123)[2:0] 
case61 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=PORT_A(port_a_123)[2:0]|PORT_B[7:5]|PORT_C[15:13] 
case62 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=PORT_A(port_a_123)[2:0]);sig_b=(2:0=PORT_B[2:0]);sig_c=(2:0=PORT_C[2:0]) 
case63 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=PORT_A(port_a_123)[2:0]|PORT_AA[2:0]|PORT_AAA[2:0]);sig_b=(2:0=PORT_B[2:0]|PORT_BB[2:0]|PORT_BBB[2:0]);sig_c=(2:0=PORT_C[2:0]|PORT_CC[2:0]|PORT_CCC[2:0]) 
case64 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=PORT_A(port_a_123)[2:0] 
case65 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=PORT_A(port_a_123)[2:0]|PORT_B[7:5]|PORT_C[15:13] 
case66 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=PORT_A(port_a_123)[2:0]);sig_b=(2:0=PORT_B[2:0]);sig_c=(2:0=PORT_C[2:0]) 
case67 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=PORT_A(port_a_123)[2:0]|PORT_AA[2:0]|PORT_AAA[2:0]);sig_b=(2:0=PORT_B[2:0]|PORT_BB[2:0]|PORT_BBB[2:0]);sig_c=(2:0=PORT_C[2:0]|PORT_CC[2:0]|PORT_CCC[2:0]) 
case68 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=PORT_A(port_a_123)[2:0] 
case69 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=PORT_A(port_a_123)[2:0]|PORT_B[7:5]|PORT_C[15:13] 
case70 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=PORT_A(port_a_123)[2:0]);sig_b=(2:0=PORT_B[2:0]);sig_c=(2:0=PORT_C[2:0]) 
case71 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=PORT_A(port_a_123)[2:0]|PORT_AA[2:0]|PORT_AAA[2:0]);sig_b=(2:0=PORT_B[2:0]|PORT_BB[2:0]|PORT_BBB[2:0]);sig_c=(2:0=PORT_C[2:0]|PORT_CC[2:0]|PORT_CCC[2:0]) 
case72 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=intf.PORT_A(port_a_123)[2:0] 
case73 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'alias': 'port_a_123',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=intf.PORT_A(port_a_123)[2:0]|intf.PORT_B[7:5]|intf.PORT_C[15:13] 
case74 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'interface': 'intf',
            'alias': 'port_a_123',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'interface': 'intf',
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'interface': 'intf',
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=intf.PORT_A(port_a_123)[2:0]);sig_b=(2:0=intf.PORT_B[2:0]);sig_c=(2:0=intf.PORT_C[2:0]) 
case75 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'alias': 'port_a_123',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=intf.PORT_A(port_a_123)[2:0]|intf.PORT_AA[2:0]|intf.PORT_AAA[2:0]);sig_b=(2:0=intf.PORT_B[2:0]|intf.PORT_BB[2:0]|intf.PORT_BBB[2:0]);sig_c=(2:0=intf.PORT_C[2:0]|intf.PORT_CC[2:0]|intf.PORT_CCC[2:0]) 
case76 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'alias': 'port_a_123',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'interface': 'intf',
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=INST:PORT_A(port_a_123)[2:0] 
case77 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'instance': 'INST',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=INST:PORT_A(port_a_123)[2:0]|INST:PORT_B[7:5]|INST:PORT_C[15:13] 
case78 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'instance': 'INST',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'instance': 'INST',
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'instance': 'INST',
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=INST:PORT_A(port_a_123)[2:0]);sig_b=(2:0=INST:PORT_B[2:0]);sig_c=(2:0=INST:PORT_C[2:0]) 
case79 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=INST:PORT_A(port_a_123)[2:0]|INST:PORT_AA[2:0]|INST:PORT_AAA[2:0]);sig_b=(2:0=INST:PORT_B[2:0]|INST:PORT_BB[2:0]|INST:PORT_BBB[2:0]);sig_c=(2:0=INST:PORT_C[2:0]|INST:PORT_CC[2:0]|INST:PORT_CCC[2:0]) 
case80 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 2:0=INST:intf.PORT_A(port_a_123)[2:0] 
case81 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'instance': 'INST',
            'alias': 'port_a_123',
            'interface': 'intf',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 2:0=INST:intf.PORT_A(port_a_123)[2:0]|INST:intf.PORT_B[7:5]|INST:intf.PORT_C[15:13] 
case82 = {
    'index_slice_mapping': [{
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'instance': 'INST',
            'alias': 'port_a_123',
            'interface': 'intf',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'interface': 'intf',
            'instance': 'INST',
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'interface': 'intf',
            'instance': 'INST',
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(2:0=INST:intf.PORT_A(port_a_123)[2:0]);sig_b=(2:0=INST:intf.PORT_B[2:0]);sig_c=(2:0=INST:intf.PORT_C[2:0]) 
case83 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'instance': 'INST',
                'alias': 'port_a_123',
                'interface': 'intf',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(2:0=INST:intf.PORT_A(port_a_123)[2:0]|INST:intf.PORT_AA[2:0]|INST:intf.PORT_AAA[2:0]);sig_b=(2:0=INST:intf.PORT_B[2:0]|INST:intf.PORT_BB[2:0]|INST:intf.PORT_BBB[2:0]);sig_c=(2:0=INST:intf.PORT_C[2:0]|INST:intf.PORT_CC[2:0]|INST:intf.PORT_CCC[2:0]) 
case84 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'instance': 'INST',
                'alias': 'port_a_123',
                'interface': 'intf',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 4:3=INST:PORT_A(port_a_123);2:0=INST:PORT_A(port_a_123)[2:0] 
case85 = {
    'index_slice_mapping': [{
        'right': '3',
        'left': '4',
        'simple_mapping': [{
            'instance': 'INST',
            'port': 'PORT_A',
            'alias': 'port_a_123'
        }]
    }, {
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'instance': 'INST',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 4:3=INST:PORT_A(port_a_123);2:0=INST:PORT_A(port_a_123)[2:0]|INST:PORT_B[7:5]|INST:PORT_C[15:13] 
case86 = {
    'index_slice_mapping': [{
        'right': '3',
        'left': '4',
        'simple_mapping': [{
            'instance': 'INST',
            'port': 'PORT_A',
            'alias': 'port_a_123'
        }]
    }, {
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'alias': 'port_a_123',
            'instance': 'INST',
            'right': '0',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'instance': 'INST',
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'instance': 'INST',
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(4:3=INST:PORT_A(port_a_123);2:0=INST:PORT_A(port_a_123)[2:0]);sig_b=(4:3=INST:PORT_A(port_a_123);2:0=INST:PORT_B[2:0]);sig_c=(4:3=INST:PORT_A(port_a_123);2:0=INST:PORT_C[2:0]) 
case87 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(4:3=INST:PORT_A(port_a_123);2:0=INST:PORT_A(port_a_123)[2:0]|INST:PORT_AA[2:0]|INST:PORT_AAA[2:0]);sig_b=(4:3=INST:PORT_A(port_a_123);2:0=INST:PORT_B[2:0]|INST:PORT_BB[2:0]|INST:PORT_BBB[2:0]);sig_c=(4:3=INST:PORT_A(port_a_123);2:0=INST:PORT_C[2:0]|INST:PORT_CC[2:0]|INST:PORT_CCC[2:0]) 
case88 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'alias': 'port_a_123',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};

// 4:3=INST:PORT_A(port_a_123);2:0=INST:intf.PORT_A(port_a_123)[2:0] 
case89 = {
    'index_slice_mapping': [{
        'right': '3',
        'left': '4',
        'simple_mapping': [{
            'instance': 'INST',
            'port': 'PORT_A',
            'alias': 'port_a_123'
        }]
    }, {
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'instance': 'INST',
            'alias': 'port_a_123',
            'interface': 'intf',
            'port': 'PORT_A',
            'left': '2'
        }]
    }]
};

// 4:3=INST:PORT_A(port_a_123);2:0=INST:intf.PORT_A(port_a_123)[2:0]|INST:intf.PORT_B[7:5]|INST:intf.PORT_C[15:13] 
case90 = {
    'index_slice_mapping': [{
        'right': '3',
        'left': '4',
        'simple_mapping': [{
            'instance': 'INST',
            'port': 'PORT_A',
            'alias': 'port_a_123'
        }]
    }, {
        'right': '0',
        'left': '2',
        'simple_mapping': [{
            'right': '0',
            'instance': 'INST',
            'alias': 'port_a_123',
            'interface': 'intf',
            'port': 'PORT_A',
            'left': '2'
        }, {
            'interface': 'intf',
            'instance': 'INST',
            'right': '5',
            'port': 'PORT_B',
            'left': '7'
        }, {
            'interface': 'intf',
            'instance': 'INST',
            'right': '13',
            'port': 'PORT_C',
            'left': '15'
        }]
    }]
};

// sig_a=(4:3=INST:PORT_A(port_a_123);2:0=INST:intf.PORT_A(port_a_123)[2:0]);sig_b=(4:3=INST:PORT_A(port_a_123);2:0=INST:intf.PORT_B[2:0]);sig_c=(4:3=INST:PORT_A(port_a_123);2:0=INST:intf.PORT_C[2:0]) 
case91 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'instance': 'INST',
                'alias': 'port_a_123',
                'interface': 'intf',
                'port': 'PORT_A',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }]
        }]
    }]
};

// sig_a=(4:3=INST:PORT_A(port_a_123);2:0=INST:intf.PORT_A(port_a_123)[2:0]|INST:intf.PORT_AA[2:0]|INST:intf.PORT_AAA[2:0]);sig_b=(4:3=INST:PORT_A(port_a_123);2:0=INST:intf.PORT_B[2:0]|INST:intf.PORT_BB[2:0]|INST:intf.PORT_BBB[2:0]);sig_c=(4:3=INST:PORT_A(port_a_123);2:0=INST:intf.PORT_C[2:0]|INST:intf.PORT_CC[2:0]|INST:intf.PORT_CCC[2:0]) 
case92 = {
    'signal_mapping': [{
        'signal': 'sig_a',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'right': '0',
                'instance': 'INST',
                'alias': 'port_a_123',
                'interface': 'intf',
                'port': 'PORT_A',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_AA',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_AAA',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_b',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_B',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_BB',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_BBB',
                'left': '2'
            }]
        }]
    }, {
        'signal': 'sig_c',
        'index_slice_mapping': [{
            'right': '3',
            'left': '4',
            'simple_mapping': [{
                'instance': 'INST',
                'port': 'PORT_A',
                'alias': 'port_a_123'
            }]
        }, {
            'right': '0',
            'left': '2',
            'simple_mapping': [{
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_C',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_CC',
                'left': '2'
            }, {
                'interface': 'intf',
                'instance': 'INST',
                'right': '0',
                'port': 'PORT_CCC',
                'left': '2'
            }]
        }]
    }]
};
