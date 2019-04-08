import py_parse_grammer
import py_parse_testcase

are_failed = []
for x in range(1, 93):
    case_s = "case" + str(x)
    case_x = getattr(py_parse_testcase, case_s)
    try:
        test_x = py_parse_grammer.all_mappings.parseString(case_x)
    except:
        are_failed.append(x)
        continue
    if not test_x[0]:
        are_failed.append(x)
    else:
        print "\n//", case_x, "\n", case_s, "=", test_x.asDict(), ";"

if are_failed:
    print "\nare_failed", "=", are_failed, ";"
    