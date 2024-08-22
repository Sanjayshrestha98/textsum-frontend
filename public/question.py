import subprocess
import random
import time
for i in range():
# while True:
    one = [
           "18-25", 
           "26-35"
           ]

    two = [
    "Male",
    "Female",
   ]

    three = [
#     "Undergraduate",
    "Graduate",
#     "Postgraduate"
    ]

    four = [
           "Student",
       #     "Academic/Researcher",
       #     "Professional",
           "Other"
           ]

    five = [
       #     "History", 
       #     "Science", 
           "Literatures", 
           "Others"
           ]

    six = [
       #     "Rarely", 
       #     "Occasionally", 
           "Frequently"
           ]

    seven = [
           "Short+articles+or+abstracts+(1-5+pages)",
             "Medium-length+papers+(6-15+pages)",
       #       "Long+research+articles+(16-30+pages)",
       #       "Extended+reports+or+theses+(more+than+31pages)"
             ]

    eight = [
    "Research+papers",
#     "Thesis+or+dissertations",
    "Reports"
    ]

    nine = [
    "Laptop/Desktop",
#     "Tablet",
    "Smartphone",
    "Combination+of+the+above"
    ]

    ten = [
#     "Read+whole+document/article",
    "Prefer+summaries"
    ]

    eleven = [
    "Yes",
    "No"
    ]

    twelve = [
#     "Manually+read+and+summarize",
    "Use+existing+summary+tools+or+software",
    "Do+not+create+summaries"
    ]

    thirteen = [
    "Yes",
#     "No"
    ]

    fourteen = [
#     "Very+likely",
#     "Likely",
    "Neutral",
    "Unlikely",
#     "Very+unlikely"
    ]

    fifteen = [
    "Identifying+key+points",
    "Ensuring+accuracy+in+summarization",
#     "Time+constraints"
    ]

    sixteen = [
           "Time-saving+potential",
               "Improved+productivity",
       #     "Recommendations+from+trusted+sources"
           ]

    seventeen = [
    "Concise+summaries",
    "Accurate+content+extraction",
#     "Customizable+summarization+options"
    ]

    eighteen = [
           "Save+time+on+literature+review",
                "Improve+comprehension+of+complex+texts", 
              #   "Facilitate+idea+synthesis", 
              #   "Others"
                ]

    nineteen = [
    "Very+important",
    "Important",
    "Somewhat+important",
#     "Not+important"
    ]

    twenty = [
#     "Intuitive+navigation",
    "Clear+presentation+of+summarized+content",
#     "Customizable+settings",
#     "Other"
    ]


    twentyone = [
    "Very+concerned",
#     "Concerned",
#     "Neutral",
#     "Not+concerned"
    ]

    twentytwo = [
    "Yes",
#     "No"
    ]

    twentythree = [
    "Accuracy+of+summaries",
#     "Regular+updates+and+improvements",
#     "Compatibility+with+different+file+formats", 
#     "Other"
    ]

    random_option_one = random.choice(one)
    random_option_two = random.choice(two)
    random_option_three = random.choice(three)
    random_option_four = random.choice(four)
    random_option_five = random.choice(five)
    random_option_six = random.choice(six)
    random_option_seven = random.choice(seven)
    random_option_eight = random.choice(eight)
    random_option_nine = random.choice(nine)
    random_option_ten = random.choice(ten)
    random_option_eleven = random.choice(eleven)
    random_option_twelve = random.choice(twelve)
    random_option_thirteen = random.choice(thirteen)
    random_option_fourteen = random.choice(fourteen)
    random_option_fifteen = random.choice(fifteen)
    random_option_sixteen = random.choice(sixteen)
    random_option_seventeen = random.choice(seventeen)
    random_option_eighteen = random.choice(eighteen)
    random_option_nineteen = random.choice(nineteen)
    random_option_twenty = random.choice(twenty)
    random_option_twentyone = random.choice(twentyone)
    random_option_twentytwo = random.choice(twentytwo)
    random_option_twentythree = random.choice(twentythree)



    # chrome_path = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
    chrome_path = "C:/Program Files/Google/Chrome/Application/chrome"
    # urll="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdgHRH2dLLhzedeaqdla76Lc5PXsguiz8ZUov2S86S3_6ubow/formResponse?entry.969575977={}&entry.389035001={}&entry.1383608984={}&entry.540964937={}&entry.1138011739={}&entry.1793020862={}&entry.138357530={}&entry.1140034374={}&entry.471200310={}&entry.781569476={}&entry.1585634705={}&entry.329300099={}&entry.617612353={}&entry.608875780={}&entry.1091358571={}&entry.805590943={}&entry.2118801140={}&entry.2121661640={}".format(random_option_one, random_option_two, random_option_three, random_option_four, random_option_five, random_option_six, random_option_seven, random_option_eight, random_option_nine, random_option_ten, random_option_eleven, random_option_twelve, random_option_thirteen, random_option_fourteen, random_option_fifteen, random_option_sixteen, random_option_seventeen, random_option_eighteen, random_option_nineteen, random_option_twenty, random_option_twentyone, random_option_twentytwo, random_option_twentythree)
    urll="https://docs.google.com/forms/u/0/d/e/1FAIpQLScL3TrVI_MxQnMDa6EOEOVaoJVGZqVGTiT1QMy7d-BLd6FB8A/formResponse?entry.46004972={}&entry.186012225={}&entry.1056812346={}&entry.734488065={}&entry.291358070={}&entry.1367407205={}&entry.815816565={}&entry.2017563401={}&entry.1282816374={}&entry.1512860644={}&entry.1386175890={}&entry.1129147663={}&entry.1116713042={}&entry.1818843299={}&entry.727488091={}&entry.883930303={}&entry.1905918788={}&entry.582620073={}&entry.631268232={}&entry.1696365580={}&entry.1671033751={}&entry.201642847={}&entry.2093823495={}".format(random_option_one, random_option_two, random_option_three, random_option_four, random_option_five, random_option_six, random_option_seven, random_option_eight, random_option_nine, random_option_ten, random_option_eleven, random_option_twelve, random_option_thirteen, random_option_fourteen, random_option_fifteen, random_option_sixteen, random_option_seventeen, random_option_eighteen, random_option_nineteen, random_option_twenty, random_option_twentyone, random_option_twentytwo, random_option_twentythree)

    subprocess.Popen([chrome_path, urll])
#     time.sleep(50)
    