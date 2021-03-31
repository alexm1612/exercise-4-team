function FormUI({
    mainWidth=450,
    mainHeight=350,
    inputWidth=325,
    buttonWidth=200,
    inputHeight=30,
    display="flex",
    flexDirectionCol="column",
    flexDirectionRow="row",
    justifyContentSpaceBetween="space-between",
    alignSelf="center",
    alignItemsBaseline="baseline",
    margin10=10,
    margin20=20,
    backgroundColorMain="rgb(25,122,23)",
    backgroundColorInput="rgb(218,233,176)",
    backgroundColorButton="rgb(106,161,81)",
    border="2px solid rgb(148,212,108)",
    textAlign="center",
    fontStyleItalic="italic",
}){
    return
        <div style={{
        width:mainWidth,
        height:mainHeight,
        display:display,
        flexDirection:flexDirectionCol,
        backgroundColor:backgroundColorMain
        }}>
            <div style={{
            textAlign:textAlign,
            }}><h3>Please fill <span style={{
                fontStyle:fontStyleItalic,
            }}>every</span> field of this form before submitting</h3></div>
            <div style={{
            display:display,
            justifyContent:justifyContentSpaceBetween,
            alignItems:alignItemsBaseline,
            margin:margin10
            }}>
                <div>Name:</div>
                <div>
                    <input style={{
                    width:inputWidth,
                    height:inputHeight,
                    backgroundColor:backgroundColorInput
                    }}/>
                </div>
            </div>
            <div style={{
            display:display,
            justifyContent:justifyContentSpaceBetween,
            alignItems:alignItemsBaseline,
            margin:margin10
            }}>
                <div>Age:</div>
                <div>
                    <input type="number" style={{
                    width:inputWidth,
                    height:inputHeight,
                    backgroundColor:backgroundColorInput
                    }}/>
                </div>
            </div>
            <div style={{
            display:display,
            justifyContent:justifyContentSpaceBetween,
            alignItems:alignItemsBaseline,
            margin:margin10
            }}>
                <div>Occupation:</div>
                <div>
                    <input style={{
                    width:inputWidth,
                    height:inputHeight,
                    backgroundColor:backgroundColorInput
                    }}/>
                </div>
            </div>
            <div style={{
            display:display,
            justifyContent:justifyContentSpaceBetween,
            alignItems:alignItemsBaseline,
            margin:margin10
            }}>
                <div>Email:</div>
                <div>
                    <input type="email" style={{
                    width:inputWidth,
                    height:inputHeight,
                    backgroundColor:backgroundColorInput
                    }}/>
                </div>
            </div>
            <input type="button" value="Submit" style={{
            width:buttonWidth,
            height:inputHeight,
            alignSelf:alignSelf,
            margin:margin20,
            backgroundColor:backgroundColorButton,
            border:border,
            }}/>
        </div>
}

export default FormUI;