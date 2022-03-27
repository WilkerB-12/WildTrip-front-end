const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			values: {
				name_company: "",
				phone_number:"",
				address:"",
				email:"",
				password:"",
				password_confirm:""
			},
			baseUrl: "https://localhost3000",
				
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
			
			handleSubmit: (e)=>{
				e.preventDefault()
				const actions=getActions()
				console.log(getStore().values.name_company)
				if(actions.validationsSubmit()==false){
					return false
				}
				console.log(JSON.stringify(getStore().values))
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

			Signin: ()=>{
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
