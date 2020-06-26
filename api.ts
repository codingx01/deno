const welcome = ({response}:{response: any})=>{
	response.body={
		success:true,
		msg:'Welcome to Deno REST API'
	}
}

export { welcome }