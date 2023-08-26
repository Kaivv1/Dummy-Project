import { editProduct } from '../../../services/apiDummyJson';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const EditProductPage = () => {
  const product = useLoaderData();
  // const params = useParams()
  // console.log(params)

  // useEffect(()=> {
  //   fetch(`${API_URL}/products/${params.productId}`)
  //   .then(res => {
  //     return res.json();
  //   }).then(resp=> {
  //     setBrand(resp.brand)
  //     setCategory(resp.category)
  //     setDescription(resp.description)
  //     setDiscountPercentage(resp.discountPercentage)
  //     setPrice(resp.price)
  //     setRating(resp.rating)
  //     setStock(resp.stock)
  //     setTitle(resp.title)
  //     setImages(resp.images)
  //     setThumbnail(resp.thumbnail)
  //     setId(resp.id)
  //   }).catch((err)=> {
  //     console.log(err.message)
  //   })

  // },[])

  const [brand, setBrand] = useState(product.brand);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);
  const [discountPercentage, setDiscountPercentage] = useState(
    product.discountPercentage,
  );
  const [price, setPrice] = useState(product.price);
  const [rating, setRating] = useState(product.rating);
  const [stock, setStock] = useState(product.stock);
  const [title, setTitle] = useState(product.title);
  const [images] = useState(product.images);
  const [thumbnail] = useState(product.thumbnail);
  const [id] = useState(product.id);

  const [isChange, setIsChange] = useState(false);

  const onChange = () => {
    setIsChange(true);
  };

  const onCancel = () => {
    setIsChange(!isChange);
  };

  console.log(isChange);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !category ||
      !description ||
      !discountPercentage ||
      !price ||
      !rating ||
      !stock
    )
      return alert('Please fill all the fields!');

    const editedProduct = {
      brand: brand,
      category: category,
      description: description,
      discountPercentage: discountPercentage,
      price: price,
      rating: rating,
      stock: stock,
      title: title,
      images: images,
      thumbnail: thumbnail,
      id: id.toString(),
    };

    console.log(editedProduct);

    editProduct(id, editedProduct);
    setIsChange(!isChange);
    // fetch(`${API_URL}/products/${params.productId}`, {
    //   method: 'PUT', /* or PATCH */
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(editedProduct)
    // })
    // .then(res => {
    //   res.json()
    //   if(res.ok) alert('You have successfully edited the product')
    //   if(!res.ok) throw Error();
    // })
    // .catch((err)=> {
    //   throw Error(`Failed to edit the product: ${err}`)
    // })
  };

  return (
    <form onSubmit={handleSubmit} onChange={onChange}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
        <input
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        {isChange && (
          <>
            <button type="submit">Save</button>
            <button onClick={onCancel}>Cancel</button>
          </>
        )}
        <Link to={`/products/${id}`}>
          <button>Back</button>
        </Link>
      </div>
    </form>
  );
};

export default EditProductPage;
