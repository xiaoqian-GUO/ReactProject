var destination=document.querySelector("#container");
var　Circle=React.createClass({
    getInitialState: function(){
        return {
            bgColor:"red",
        };
    },
    showCircle: function(e){
        console.log('触发点击事件');
        alert(e.button);
        var colors=["black","purple","blue","green","yellow","pink"];
        var ran=Math.trunc(Math.random()*colors.length);
        this.setState({
            bgColor:colors[ran],
        });
    },
    alertInfo: function(e){
        alert('点击了'+e.button);
    },
    render:function(){
        var circleStyle={
            padding:10,
            margin:20,
            backgroundColor:this.state.bgColor,
            width:100,
            height:100,
            borderRadius:"50%",
            display:"inline-block",
        };
        return (
            <div style={circleStyle} onClick={this.showCircle}>
            </div>
        );
    },
});
function showCircle(){
    var colors=["purple","blue","green","yellow","pink"];
    var i;
    var arr=[];
    for(i=0;i<10;i++){
        arr.push(<Circle key={i+'circle'} />);
    }
    return arr;
};
var theCircle= <Circle />;
ReactDOM.render(
    <div>
       {showCircle()}
    </div>
   ,
    document.querySelector("#container")
);