/* 
3 leds
3 resistencias
1 potenciometro
Sensor ultrasonico

ledA
ledB
ledC


Funcionalidad: 
Cuando el potenciometro este de la mitad para arriba,al tope: led prendido. ledA
Cuando el potenciometro este de la mitad para abajo,al cero: led apagado. ledA

Si el sistema esta apagado 
el led ledB y ledC parpadean cada un segundo al mismo tiempo. ledB y ledC

Si el sistema esta prendido 
ledB y ledC se encenderan cuando el sensor ultrasonico detecte una distancia menor de a 10 cm. y sino se apagan. ledB y ledC
 
*/

// variables globales
int ledA = 2;
int ledB = 3;
int ledC = 4;
int potenciometro = A0;
int sensor = 7;
int valorPotenciometro = 0;
int valorSensor = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(ledA, OUTPUT);
  pinMode(ledB, OUTPUT);
  pinMode(ledC, OUTPUT);
  pinMode(potenciometro, INPUT);
  pinMode(sensor, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  valorPotenciometro = analogRead(potenciometro);
  valorSensor = analogRead(sensor);
  if(valorPotenciometro > 512){
    digitalWrite(ledA, HIGH);
    digitalWrite(ledB, LOW);
    digitalWrite(ledC, LOW);
  }else{
    digitalWrite(ledA, LOW);
    digitalWrite(ledB, HIGH);
    digitalWrite(ledC, HIGH);
    delay(500);
    digitalWrite(ledB, LOW);
    digitalWrite(ledC, LOW);
    delay(500);
  }
  if(valorSensor < 10){
    digitalWrite(ledB, HIGH);
    digitalWrite(ledC, HIGH);
  }else{
    digitalWrite(ledB, LOW);
    digitalWrite(ledC, LOW);
  }
}