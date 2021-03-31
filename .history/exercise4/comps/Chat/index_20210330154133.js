function ChatUI({
  mainWidth=300,
  url="https://placekeanu.com/100/100",
  display="flex",
  flexDirectionRow="row",
  flexDirectionCol="column",
  alignItems="center",
  justifyContentCenter="center",
  justifyContentSpaceEvenly="space-evenly",
  justifyContentFlexStart="flex-start",
  justifyContentFlexEnd="flex-end",
  backgroundColorDark="royalblue",
  backgroundColorLight="powderblue",
  backgroundColorContent="white",
  backgroundColorSend="navy",
  messageWidth=150,
  messageHeight=50,
  messageBorderRadius=25,
  avatarWidth=50,
  avatarHeight=50,
  smallHeight=70,
  largeHeight=200,
  textboxWidth=200,
  textboxHeight=30,
  textboxBorderRadius=15,
  marginRight=10,
  paddingRight=10,
  paddingLeft=10,
  color="white",
 
}){
  return <div style={{
    width:width1
  }}>

  
    
}



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
          width: 50px; height: 50px; border-radius: 25px; background-color: white; margin-right: 10px;}}></div>
        <div style="width: 150px; height: 50px; border-radius: 25px; background-color: white;"></div>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: flex-end; width: 100%;">
        <div style="width: 150px; height: 50px; border-radius: 25px; background-color: white; margin-right: 10px;"></div>
        <div style="width: 50px; height: 50px; border-radius: 25px; background-color: white;"></div>
      </div>
    </span>
    <span style="display: flex; flex-direction: row; background-color: royalblue; height: 70px; justify-content: space-between; align-items: center; padding-left: 10px; padding-right: 10px;">
      <div style="display: flex; width: 200px; height: 30px; background-color: white; border-radius: 15px; align-items: center; padding-left: 5px;">Type...</div>
      <button style="display: flex; height: 30px; width: 50px; border-radius: 15px; background-color: navy; color: white; align-items: center;">Send</button>
    </span>
  </div>