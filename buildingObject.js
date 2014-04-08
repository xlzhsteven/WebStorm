/**
 * Created by Xiaolong on 4/1/14.
 */
function Fencepost (x, y, postNum){
    this.x = 0;
    this.y = 0;
    this.postNum = undefined;
    this.connectionsTo = [];
    this.sendRopeTo = function(connectedPost){
        this.connectionsTo.push(connectedPost);
    };
}