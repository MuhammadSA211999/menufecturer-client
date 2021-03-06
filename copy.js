const Information = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth)
    const [num, setNum] = useState(5);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [product, id]);

    const incNum = () => {
        if (num < product.quantity) {
            setNum(Number(num) + 1);
        }
    };
    const decNum = () => {
        if (num > 5) {
            setNum(num - 1);
        }
    }
    const handleChange = (e) => {
        setNum(e.target.value);
    };


    const total2 = parseInt(num) * parseInt(product.prize);

    const handleOrder = event => {
        event.preventDefault();

        const order = {
            productId: product._id,
            productName: product.name,
            oreder: user.email,
        }

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 my-24 mx-24 gap-5'>
            <div className="card my-24 lg:max-w-xl  lg:card-side bg-base-100">
                <figure>
                    <img className='mx-12' src={product.img} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-purple-400 font-bold mb-4">{product.name}</h2>
                    <p className='text-xl font-bold'>Stock: <span className='text-green-400'>{product.quantity}</span></p>
                    <p className='text-xl font-bold'>Menimum order: <span className='text-green-400'>30</span></p>
                    <div className="col-xl-1">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                            </div>
                            <input type="text" className="form-control w-12 text-center" value={num} onChange={handleChange} />
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold text-lime-300">Account of goods!!</h2>
                    <form onSubmit={handleOrder} className='mt-8 mx-12 text-xl'>
                        <h4 className='text-xl font-bold mb-2'>Prize</h4>
                        <input type="text" disabled value={product.prize} placeholder="Product quantity" className="input input-bordered w-full max-w-xs" />
                        <h4 className='text-xl font-bold mb-2'>Product quantity</h4>
                        <input type="text" disabled value={num} placeholder="prize" className="input input-bordered w-full max-w-xs mb-4" />
                        <h4 className='text-xl font-bold mb-2'>Total amount</h4>
                        <input type="text" disabled value={total2} placeholder="prize" className="input input-bordered w-full max-w-xs mb-4" />
                        <input type="submit" value="Purchase" className="btn btn-secondary uppercase w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Information