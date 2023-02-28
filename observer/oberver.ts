// State
interface News {
    headline: string;
    body: string;
    author: string;
    date: string;
}

// Oberver 
interface Subscriber{
    update(News:any): void;
}

//  Observable
class Publisher {
    // Data
    private news: News;
    private subscribers: Array<Subscriber>;

    // Methods
    subscribe(subscriber:Subscriber):boolean{ this.subscribers.push(subscriber); return true}
    // discuss in your groups
    unsubscribe(subscriber:Subscriber){this.subscribers.pop();}
    private notify(){
        for (let i = 0; i < this.subscribers.length; i++) {this.subscribers[i].update(this.news)};
        // for(let subscriber of this.subscribers){subscriber.update(this.news)}
        // this.subscribers.forEach(subscriber => subscriber.update(this.news))
    }
    private trigger(){this.notify()}
    Publisher(news:News){this.news = news; this.trigger()}

    publish(news:News){
        this.news = news;
        this.trigger()
    }
}

class NewVisionSubscriber implements Subscriber {
    private name: string;

    cosntructor(name:string){
        this.name = name;
    }

    update(news:News):void {
        console.log("===========================")
        console.log(this.name)
        console.log(news)
    }
}

let newVision = new Publisher();

let subscriber1 = new NewVisionSubscriber('Susan')
let subscriber2 = new NewVisionSubscriber('Pearl')
let subscriber3 = new NewVisionSubscriber('Paul')
let subscriber4 = new NewVisionSubscriber('Mary')
let subscriber5 = new NewVisionSubscriber('Peter')

newVision = subscribe(subscriber1)
newVision = subscribe(subscriber2)
newVision = subscribe(subscriber3)
newVision = subscribe(subscriber4)
newVision = subscribe(subscriber5)
newVision = subscribe(subscriber6)
newVision = subscribe(subscriber7)

let news1 = {
    headline: 'Bootcamp Trending on Twitter!',
    bdy: 'Software engineer solve Uganda\'s biggest challenges ...',
    author: 'Refacotry bootcamp 12',
    date: '28th/Februaru/2023'
}
 newVision.publish(volume1);