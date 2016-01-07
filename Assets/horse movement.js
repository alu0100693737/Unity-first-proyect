var contador : float = 0;
var playerPos: Transform;
var x: float =0;
var y: float = 0;
var z: float = 0;

var correr: float =1.2;
var rotate: float = 3;
var turnSpeed: int= 360;

function Update(){
	if((contador> 3.5) && (contador< 6.5)) 
		transform.Translate(Vector3.forward * Time.deltaTime);
	if((contador> 11) && (contador< 13))
		transform.Translate(Vector3.forward * Time.deltaTime);
	if (contador>14){
			contador=0;
			transform.Rotate(Vector3(0, 90, 0));
			}
	contador+= Time.deltaTime;
	}
	