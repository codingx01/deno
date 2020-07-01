import { client } from './mysql.ts'

//welcome API
const welcome = ({response}:{response: any})=>{
	response.body={
		success:true,
		msg:'Welcome to Deno REST API'
	}
}

//AddGuest API
const addGuest = async ({ request, response}:{ request:any, response: any})=>{

	const body= await request.body()
	const guest=body.value
	if(!request.hasBody){
		response.status=400
		response.body={
			success:false,
			msg: 'No data'
		}
	}else{
		try{
			const result=client.execute('INSERT INTO guest_table(firstname,lastname,email)VALUES(?,?,?)',[guest.firstname,guest.lastname,guest.email])

			response.status=200
			response.body={
				success:true,
				data:guest
			}
		}catch (error){
			response.status=500
			response.body={
				success:false,
				msg: error.toString()
			}
		}finally{
			await client.close()
		}
	}
	
}

//Fetch Guest
const getGuest = async ({ response}:{ response: any})=>{
try{
	const result= await client.query("SELECT * FROM guest_table")
	response.status=200
			response.body={
				success:true,
				data:result
			}
}catch (error){
			response.status=500
			response.body={
				success:false,
				msg: error.toString()
			}
		}finally{
			await client.close()
		}
	
}

//Update Guest

const updateGuest = async ({ request, response}:{ request:any, response: any})=>{

	const body= await request.body()
	const guest=body.value
	if(!request.hasBody){
		response.status=400
		response.body={
			success:false,
			msg: 'No data'
		}
	}else{
		try{
			const result=client.execute('UPDATE guest_table SET firstname=?, lastname=?, email=? WHERE id=?',[guest.firstname,guest.lastname,guest.email,guest.id])

			response.status=200
			response.body={
				success:true,
				data:guest
			}
		}catch (error){
			response.status=500
			response.body={
				success:false,
				msg: error.toString()
			}
		}finally{
			await client.close()
		}
	}
	
}

//Delete Guest

const deleteGuest = async ({ params, response}:{ params:{id:string}, response: any})=>{

try{
	const result= await client.query("DELETE FROM guest_table WHERE id=?",[params.id])
	response.status=200
			response.body={
				success:true,
				msg:`Guest with id ${params.id} has been deleted`
			}

}catch (error){
			response.status=500
			response.body={
				success:false,
				msg: error.toString()
			}
		}finally{
			await client.close()
		}

}


export { welcome, addGuest, getGuest, updateGuest, deleteGuest }
