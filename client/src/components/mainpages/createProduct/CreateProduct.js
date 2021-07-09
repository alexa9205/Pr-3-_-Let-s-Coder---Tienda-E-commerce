import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'

const initialState = {
    name: '',
    price: 0,
    description: '',
    category: '',
    _id: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()

    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            products.forEach(product => {
                if(product._id === param.id) {
                    setProduct(product)
                    setImages(product.images)
                }
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    }, [param.id, products])

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return setErrorMessage("No eres administrador! ")
            const file = e.target.files[0]
            
            if(!file) return setErrorMessage("File not exist.")

            if(file.size > 1024 * 1024) // 1mb
                return setErrorMessage("Size too large!")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return setErrorMessage("El formato del archivo es incorrecto!")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            setErrorMessage(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if(!isAdmin) return setErrorMessage("No eres administrador!")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: images.public_id}, {
                headers: {Authorization: token}
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            setErrorMessage(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return setErrorMessage("No eres administrador!")
            if(!images) return setErrorMessage("No has subido una imagen del producto!")

            if(onEdit){
                await axios.put(`/api/products/${product._id}`, {...product, images}, {
                    headers: {Authorization: token}
                })
                setSuccessMessage("Producto actualizado!")
            }else{
                await axios.post('/api/products', {...product, images}, {
                    headers: {Authorization: token}
                })
                setSuccessMessage("Producto creado!")
            }
            setCallback(!callback)
            setTimeout(() => {
                history.push("/")
            }, 3000);
           
        } catch (err) {
            setErrorMessage(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                
            </div>

            <form onSubmit={handleSubmit}>

                <div className="row">
                    <label htmlFor="name">Nombre producto:</label>
                    <input type="text" name="name" id="name" required
                    value={product.name} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Precio: </label>
                    <input type="number" name="price" id="price" required
                    value={product.price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Descripcion: </label>
                    <textarea type="text" name="description" id="description" required
                    value={product.description} rows="5" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="categories">Categoria: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput} >
                        <option value="">Por favor, selecciona una categoria: </option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="msg_ok" style={{display: successMessage ? 'block' : 'none'}} role="alert">
                    {successMessage}
                </div>

                <div className="msg_alert" style={{display: errorMessage ? 'block' : 'none'}} role="alert">
                    {errorMessage}
                </div>

                <button type="submit">{onEdit? "Actualizar" : "Crear"}</button>
            </form>
        </div>
    )
}

export default CreateProduct
