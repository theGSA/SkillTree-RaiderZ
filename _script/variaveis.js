var talentdata = {
    /*available_points: 40,
    defender:{points:0},
    berserker:{points:0},
    sorcerer:{points:0},
    cleric:{points:0},
    assassin:{points:0}*/
};

var stylestalent={
    //id das skill de cada style e coluna a que pertecem
    //"21901"= id
    //0 = coluna
    berserker:{   
        skill:{
            "21901": 0, "20401": 1, "20701": 2, "23000": 4, "20001": 5, "20601": 7, "21101":10, "20501":13,
            "21501":15, "23100":17, "22300":18, "21201":20, "21600":21, "21401":22, "23200":23, "20806":25,
            "21700":27, "22700":29, "22400":30, "22500":32, "20801":38, "22600":40, "22700":41
        },
        mastery:{
            "22000": 0, "22100": 1, "80023": 2, "22101": 4, "20201": 5, "20301": 6, "20202": 8,
            "20302":10, "20203":12
        }
    },
    
    defender:{
        skill:{
            "11601": 0, "10801": 1, "10701": 2, "13500": 4, "10001": 5, "12600": 8, "13300": 9, "12100":12,
            "11401":13, "11101":16, "10301":17, "10901":18, "10601":20, "11501":21, "13200":23, "11001":25,
            "12500":27, "11201":28, "10401":29, "11406":30, "11901":32, "13400":33, "11801":34, "12300":40,
            "12700":41
        },
        mastery:{
            "12000": 0, "12200": 1, "80022": 2, "12201": 4, "10220": 5, "10210": 6, "10221": 8,
            "10211": 10, "10222":12
        }
    },
    
    cleric:{
        skill:{
            "60801": 0, "63700": 2, "63500": 3, "65800": 4, "60001": 5, "62600": 7, "61401":10, "65900":11,
            "61701":12, "60601":14, "62900":15, "60201":17, "62420":19, "65500":21, "63200":22, "65300":23,
            "61901":24, "62201":25, "64700":26, "65700":27, "60301":29, "62001":30, "61500":33, "63900":34,
            "65400":35, "64900":37, "60400":41
        },
        mastery:{
            "60501": 0, "63000": 1, "80025": 2, "62500": 4, "63001": 5, "62700": 6, "61200": 8,
            "63002": 9, "62701":10, "61201":12
        }
    },
    
    sorcerer:{
        skill:{
            "50501": 0, "52720": 1, "52770": 2, "52760": 3, "54500": 4, "50001": 5, "53000": 7, "51201":10,
            "52000":12, "52960":14, "50601":15, "54000":17, "52500":19, "52840":20, "52780":22, "54200":23,
            "52900":24, "52850":25, "52940":27, "50301":29, "52930":32, "52990":34, "52970":37, "50400":41
        },
        mastery:{
            "52750": 0, "80024": 2, "53700": 4, "50201": 6, "53701": 8, "50202": 10, "53702": 12
        }
    },
    
    assassin:{
        skill:{
            "33600": 0, "33900": 1, "33500": 2, "31400": 4, "30000": 5, "34500": 7, "34000": 9, "34700":10,
            "33700":12, "33300":13, "34200":15, "31500":17, "34400":20, "33100":21, "34600":22, "33800":24,
            "33400":25, "31600":29, "32600":32, "34100":33, "34800":34, "32700":37, "34300":40, "32000":41
        } ,
        mastery:{
            "31800": 0, "35000": 1, "80026": 2, "31700":4, "31900": 6, "31701": 8, "31901": 10,
            "31702": 12 
        }
    }
}