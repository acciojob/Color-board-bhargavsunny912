//your JS code here. If required.
let container=document.querySelector(".container");
        let square=document.querySelectorAll(".square");

        let colors=["red","blue","violet","indigo","green","yellow","orange","aliceblue","saffron","pink"];
            
        for(let i=0;i<800;i++){
            let div=document.createElement("div");
            div.className="square";

            div.addEventListener("mouseover",(e)=>{
                div.style.backgroundColor="red";
			})
			div.addEventListener("mouseout",(e)=>{
				div.style.transition="backgroundColor 1s ease 1s";
                div.style.backgroundColor="rgb(29,29,29)";
			})
            

            container.append(div);
        }