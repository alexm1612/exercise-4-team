function ChatUI({
  url="https://placekeanu.com/100/100",
  display="flex",
  flexDirectionRow="row",
  flexDirectionCol
  width1=50,
  width2=100
  




}){
  return <div style={{
    width:width1
  }}>

  
    <span></span>
    <span></span>
    <span>
      <button></button>
    </span>
  </div>
}



return <div style="display: flex; flex-direction: column; width: 300px; border: 1px solid black;">
    <span style="display: flex; flex-direction: row; background-color: royalblue; color: white; height: 70px; justify-content: center; align-items: center;">
      <h3>CHAT</h3>
    </span>
    <span style="display: flex; flex-direction: column; background-color: powderblue; height: 200px; align-items: center; justify-content: space-evenly;">
      <div style="display: flex; flex-direction: row; justify-content: flex-start; width: 100%;">
        <div style="width: 50px; height: 50px; border-radius: 25px; background-color: white; margin-right: 10px;"></div>
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