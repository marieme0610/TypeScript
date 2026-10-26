interface Voiture{
     readonly models:string;

}

class Car implements Voiture{
     public readonly models:string;
     private couleur:string;
     private marque:string;
 constructor(models:string,couleur:string,marque:string,){
    this.models = models;
    this.couleur = couleur;
    this.marque = marque;
 }



 setMarque(marque:string){
    this.marque = marque;
    
 }

 setCouleur(couleur:string){
    this.couleur = couleur;
    
 }

  getModel():string{
    return this.models;
 }

 getMarque():string{
    return this.marque;
 }

 getCouleur():string{
    return this.couleur;
 }

}

const v1 = new Car('mm','dd','dsd');
v1.setCouleur('azerty');
console.log(v1.getCouleur());
