
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			values: {
				name:"",
				lastname:"",
				nickname:"",
				company_name: "",
				phone_number:"",
				address:"",
				email:"",
				password:"",
				cloudinary_url:"",
				instagram_url:""
			},
			password_confirm:"",
			baseUrl: "http://127.0.0.1:5000",
			passRegister: false,
			logged_User:{
				token:"",
				user_id:""
			},
		},
		actions: {
			//para recibir entradas de inputs de registro
			handleInputChange: (e)=>{
				setStore({values:{...getStore().values, [e.target.name]: e.target.value
				}})
			},
			handleInputChangePasswordConfirm: (e)=>{
				setStore({password_confirm:{...getStore().password_confirm, [e.target.name]: e.target.value
				}})
			},
			handleSubmit: (e,resource)=>{
				//e.preventDefault()
				const actions=getActions()
				console.log(getStore().values)
				if(actions.validationsSubmit(e)==false){
					return false
				}
				actions.Signin(resource)
			},			

			validationsSubmit: (e)=>{	
				let isValid=true 
				if(e.target.name=="companies"){
					if(getStore().values.company_name==""){
						alert("necesita nombre de la compañía")
						isValid=false
					}
				}
				if(e.target.name=="travelers") {
					if(getStore().values.nickname==""){
						alert("necesita un apodo")
						isValid=false
					}
				}
					if(getStore().values.phone_number=="") {
						alert("necesita número de teléfono")
						isValid=false
				}							
				if(getStore().values.email=="") {
					alert("necesita un email")
					isValid=false
				}		
				
				if(getStore().values.password=="") {
					alert("necesita un password")
					isValid=false
				}
				if(getStore().values.password_confirm=="") {
					alert("necesita confirmar contraseña")
					isValid=false
				}
				if(getStore().password_confirm.password_confirm !== getStore().values.password){
					alert("Las contraseñas no coinciden")
					isValid=false
				}
				return isValid   
			},

			Signin: async(resource)=>{	
				let requestOptions={
					method: 'POST',
					headers: { 'Content-Type':'application/json'},
					body: JSON.stringify(getStore().values)
				}
				const response=await fetch(
					`${getStore().baseUrl}${resource}`, requestOptions)
				if(response.status==201){
					alert("Registro completado")
					setStore({passRegister:true})
				}
				if(response.status==400){ 
					 const mensaje=await response.json()
					 alert(mensaje.msg)
				}
			},
			login: async()=>{
				const resp = await fetch(`${getStore().baseUrl}/token`, { 
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: getStore().values.email, password: getStore().values.password }) 
			   })	
			   console.log({ email: getStore().values.email, password: getStore().values.password })  
			    if(!resp.ok) {
			   		alert("There was a problem in the login request")
					   return undefined
					}
			    if(resp.status === 401){
					alert("Invalid credentials")
					return undefined
			    }
			    else if(resp.status === 400){
					alert("Invalid email or password format")
					return undefined
			    }
			    const data = await resp.json()
			   // save your token in the localStorage
			  //also you should set your user into the store using the setStore function
			    localStorage.setItem("jwt-token", data.token);
				console.log(data)		  
			    return data
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
