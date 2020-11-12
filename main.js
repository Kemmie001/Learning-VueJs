new Vue ({
    el:"#vue-app",
    data: {
        name: "Kemi",
        Job: ["Student", "Front end Developer"],
        Age: 'I don old sha',
        link: 'https://kemmie001.github.io/portfolio/about.html',
        project: 10,
        isactive: false,
        notactive:false,
        x: 0,
        y: 0,
        git:'',
        twitter:"",
        display: false,
        red: true,
        blue: false,
        success: false,
        errorE: false,
        items: ["Books", "Blogpost", "Courses", "Communities", "Open-Source","Hackathon"],
        devTutors: [
            {name:"Brad", channel: "TraversyMedia"},
            {name:"Ninja", Channel:"Netninja"},
            {name:"Flori Pop", channel:"Floripops"}
        ]
    }, 
    methods: {
        greet: function(expression){
            return 'Hello and ' +  expression + " " +this.name;
        },
        add: function(inc){
            this.project += inc
        },
        substract: function(dec){
            this.project -= dec
        },
        yes: function(){
            this.isactive = true
        },
        no: function(){
            this.notactive = true
        },
        updateXY: function(event){
            this.x = event.offsetX
            this.y = event.offsetY
        },
        click: function(){
            alert("Sorry, link has been disabled")
        },
        enter: function(){
            alert("Input has been saved")
        },
        rect: function(){
            this.display = true
        }
    },
    computed:{
        Intro(){
            return this.name + " " + this.Job;
        }, 
        compClasses: function(){
            return {
                red: this.red,
                blue: this.blue
            }
        }
    }
});