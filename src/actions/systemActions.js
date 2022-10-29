
 
function onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    const jsonImages = JSON.parse(captureImages);
    if (event.type === 'left') {
          return false;
    } else {
          return jsonImages[0].uri;
          //this.setState({cimage:jsonImages[0].uri,isPermitted: false,imgwidth:"100%",imghight:100,imgborder:0})
    }
  }
  


