import React,{useEffect,useState} from 'react'

function Fetchapi() {
    const [posts,setposts]=useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users ').then((res => res.json()))
            .then(data => {
                setposts(data)
                console.log(data);
                console.log(posts);
            }).catch(e=>{
                console.log(e)
               
            })
    }, [])
    return (
        <div>
            <h4>User Data</h4>
            userslist{posts.length}
            <table>
                <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
                </tr>
                </thead>
                <tbody>
                    
                    {posts.map((p,index)=>{
                        console.log(p);
                return <Tr key={index} post={p} />

                    })}
                </tbody>
            </table>
        </div>
    )
}


const Tr=({post})=>{
    return(
        <tr>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.username}</td>
        <td>{post.email}</td>
        <td>{post.address.street}</td>
        <td>{post.phone}</td>
        <td>{post.website}</td>
        <td>{post.company.name}</td>


        </tr>
    )
}
export default Fetchapi