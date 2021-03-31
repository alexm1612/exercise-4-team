function ChatUI({
  mainWidth=300,
  url="https://placekeanu.com/100/100",
  display="flex",
  flexDirectionRow="row",
  flexDirectionCol="column",
  alignItems="center",
  justifyContentCenter="center",
  justifyContentSpaceEvenly="space-evenly",
  justifyContentSpaceBetween="space-between",
  justifyContentFlexStart="flex-start",
  justifyContentFlexEnd="flex-end",
  backgroundColorDark="royalblue",
  backgroundColorLight="powderblue",
  backgroundColorContent="white",
  backgroundColorButton="navy",
  messageWidth=150,
  messageHeight=50,
  messageBorderRadius=25,
  avatarWidth=50,
  avatarHeight=50,
  smallHeight=70,
  largeHeight=200,
  textboxWidth=200,
  textboxHeight=30,
  buttonWidth=50,
  buttonHeight=30,
  textboxBorderRadius=15,
  marginRight=10,
  paddingRight=10,
  paddingLeft=10,
  color="white",
 
}){

return <div style={{
  display:display,
  flexDirection:flexDirectionCol,
  width:mainWidth,
  }}>
    <span style={{
      display:display, 
      flexDirection:flexDirectionRow,
      backgroundColor:backgroundColorDark,
      color:color,
      height:smallHeight, 
      justifyContent:justifyContentCenter,
      alignItems:alignItems
      }}>
      <h3>CHAT</h3>
    </span>
    <span style={{
      display:display,
      flexDirection:flexDirectionCol,
      backgroundColor:backgroundColorLight,
      height:largeHeight,
      alignItems:alignItems, 
      justifyContent:justifyContentSpaceEvenly
    }}>
      <div style={{
        display:display, 
        flexDirection:flexDirectionRow, 
        justifyContent:justifyContentFlexStart, 
        width:mainWidth
        }}>
        <div style={{
        
          borderRadius:messageBorderRadius, 
          backgroundColor:backgroundColorContent, 
          marginRight:marginRight
          }}>
            <img style={{
              width:avatarWidth,
              height:avatarHeight,
              objectFit:"cover"
            }} src={url}/>
          </div>
        <div style={{
          width:messageWidth, 
          height:messageHeight, 
          borderRadius:messageBorderRadius,
          backgroundColor:backgroundColorContent
          }}></div>
      </div>
      <div style={{
        display:display,
        flexDirection:flexDirectionRow,
        justifyContent:justifyContentFlexEnd,
        width:mainWidth
        }}>
        <div style={{
          width:messageWidth, 
          height:messageHeight,
          borderRadius:messageBorderRadius, 
          backgroundColor:backgroundColorContent, 
          marginRight:marginRight
          }}></div>
        <div style={{
          width:avatarWidth, 
          height:avatarHeight, 
          borderRadius:messageBorderRadius, 
          backgroundColor:backgroundColorContent
          }}></div>
      </div>
    </span>
    <span style={{
      display:display,
      flexDirection:flexDirectionRow,
      backgroundColor:backgroundColorDark,
      height:smallHeight,
      justifyContent:justifyContentSpaceBetween,
      alignItems:alignItems,
      paddingLeft:paddingLeft,
      paddingRight:paddingRight
      }}>
      <div style={{
        display:display,
        width:textboxWidth,
        height:textboxHeight,
        backgroundColor:backgroundColorContent,
        borderRadius:textboxBorderRadius,
        alignItems:alignItems,
        paddingLeft:paddingLeft
        }}>Type...</div>
      <button style={{
        display:display,
        height:buttonHeight,
        width:buttonWidth,
        borderRadius:textboxBorderRadius,
        backgroundColor:backgroundColorButton,
        color:color,
        alignItems:alignItems
        }}>Send</button>
    </span>
  </div>
}


export default ChatUI;