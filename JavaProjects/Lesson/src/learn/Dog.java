package sample;

public class Dog {
    private String breed;
    public boolean hasFur;

    public String getBreed() {
        return this.breed;
    }

    public void setBreed(String bread) {
        this.breed = bread;
    }

    public boolean isHasFur() {
        return this.hasFur;
    }



    public void bark() {
        System.out.println("Woof!");
    }


}

class Class {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.setBreed("Pug");
        System.out.println(dog.isHasFur());
        System.out.println(dog.getBreed());
        dog.bark();
    }
}
