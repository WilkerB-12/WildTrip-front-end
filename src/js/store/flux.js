const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			values: {
				company_name: "",
				phone_number:"",
				address:"",
				email:"",
				password:"",
				password_confirm:"",
				instagram_url:""
			},
			baseUrl: "127.0.0.1:5000",
				
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			//para recibir entradas de inputs de registro
			handleInputChange: (e)=>{
				setStore({values:{...getStore().values, [e.target.name]: e.target.value
				}})
			},
			
			handleSubmit: (e,resource)=>{
				e.preventDefault()
				const actions=getActions()
				console.log(getStore().values)
				if(actions.validationsSubmit()==false){
					return false
				}
				getActions().Signin(resource)
			},			

			validationsSubmit: ()=>{	
				let isValid=true 
				if(getStore().values.name_company==""){
					alert("necesita nombre de la compañía")
					isValid=false
				}
				if(getStore().values.name_company=="") {
					alert("necesita número de teléfono")
					isValid=false
				}		
				
				if(getStore().values.name_company=="") {
					alert("necesita dirección referencial de la compañía")
					isValid=false
				}		
				
				if(getStore().values.name_company=="") {
					alert("necesita un email")
					isValid=false
				}		
				
				if(getStore().values.name_company=="") {
					alert("necesita un password")
					isValid=false
				}
				if(getStore().values.name_company=="") {
					alert("necesita confirmar contraseña")
					isValid=false
				}
			return isValid   
			},

			Signin: (resource)=>{
				const postUser=async(resource)=>{
					let requestOptions={
						method: 'POST',
						headers: { 'Content-Type':'application/json'},
						body: JSON.stringify(getStore().values)
					}
					const response=await fetch(
						`${getStore().baseUrl}/${resource}`, requestOptions)
						
				}

			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
