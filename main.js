var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_objects="";
function player_update() {
    fabric.Image.fromURL("player.png",function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (Img){
        block_image_objects=Img;
        block_image_objects.scaleToWidth(block_image_width);
        block_image_objects.scaleToHeight(block_image_height);
        block_image_objects.set({top:player_y,left:player_x});
        canvas.add(block_image_objects);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='80' && e.shiftKey==true)
    {
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("currentwidth").innerHTML=block_image_width;
        document.getElementById("currentheight").innerHTML=block_image_height;
    }
    if(keypressed=='77' && e.shiftKey==true)
    {
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("currentwidth").innerHTML=block_image_width;
        document.getElementById("currentheight").innerHTML=block_image_height;
    }
    if(keypressed=='70'){
        new_image("ironman_face.png");
        console.log("f key is pressed for face")
    }
    if(keypressed=='66'){
        new_image("spiderman_body.png");
        console.log("b key is pressed for body")
    }
    if(keypressed=='76'){
        new_image("hulk_legs.png");
        console.log("l key is pressed for legs")
    }
    if(keypressed=='82'){
        new_image("ironman_right_hand.png");
        console.log("r key is pressed for right hand")
    }
    if(keypressed=='72'){
        new_image("ironman_left_hand.png");
        console.log("h key is pressed for righthand")
    }
    if(keypressed=='38')
    {
        console.log("up");
        up();   
    }
    if(keypressed=='40')
    {
        console.log("down");
        down();   
    }
    if(keypressed=='37')
    {
        console.log("left");
        left();   
    }
    if(keypressed=='39')
    {
        console.log("right");
       right();   
    }
}
function up(){
    if (player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("when up arrow key  is pressed,x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("when down arrow key  is pressed,x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("when left arrow key  is pressed,x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("when right arrow key  is pressed,x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }}