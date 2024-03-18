import React from 'react';
import { useParams } from 'react-router-dom';



const BlogContent = ({blogs}) => {
    
    const {id}= useParams()

    let blog={}
    if(blog){
     let arr = blogs.data.filter(blog=> blog.id == id)
     blog=arr[0]

    }else{
        blog={}
    }
    
    console.log("Blog Object")
    console.log(blog) 
    

    /* const blogs=[
        {
            "id":1,
            'title':'Blog 1',
            'desc':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, id necessitatibus! Explicabo ex eveniet blanditiis. Tempore iusto repellat at optio tenetur. Iusto nisi explicabo dolorem sit facilis, magni cum non?",
            'coverImg':'https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?compress=1&resize=1600x1200&vertical=top',
            'content': 'A radio technology such as Bluetooth low energy or zigbee is based on a series of trade-offs that add up to limit range. First, the technology takes advantage of the “2.4 GHz” (centered on 2.45 GHz) Industrial, Scientific, and Medical (ISM) license-free band, which is recognized globally and is free for use by any party. There are several alternatives for boosting range in Bluetooth low energy or zigbee applications. One is to employ a mesh network whereby signals are forwarded from node to node ensuring the outer reaches of the system can never be out of range. Mesh networking also offers the advantages of built in redundancy (a failed node can’t cause a system to fall over because signals can easily be rerouted) and simple scaling. The downside is a major increase in complexity and project overheads.Another solution is to build in error correction to packet transmission to hold down BER in circumstances when noise would normally overwhelm the signal. This is the technique used to boost Bluetooth low energy’s range in the latest version (5) of the technology. The downside is the corrected packets demand greater system overheads compromising bandwidth.',
            'authorName':'Raouf Meziani',
            'authorImg':'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Webutvecklare',
        },
        {
            "id":2,
            'title':'Blog 2',
            'desc':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, id necessitatibus! Explicabo ex eveniet blanditiis. Tempore iusto repellat at optio tenetur. Iusto nisi explicabo dolorem sit facilis, magni cum non?",
            'coverImg':'https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?compress=1&resize=1600x1200&vertical=top',
            'content': 'A radio technology such as Bluetooth low energy or zigbee is based on a series of trade-offs that add up to limit range. First, the technology takes advantage of the “2.4 GHz” (centered on 2.45 GHz) Industrial, Scientific, and Medical (ISM) license-free band, which is recognized globally and is free for use by any party. There are several alternatives for boosting range in Bluetooth low energy or zigbee applications. One is to employ a mesh network whereby signals are forwarded from node to node ensuring the outer reaches of the system can never be out of range. Mesh networking also offers the advantages of built in redundancy (a failed node can’t cause a system to fall over because signals can easily be rerouted) and simple scaling. The downside is a major increase in complexity and project overheads.Another solution is to build in error correction to packet transmission to hold down BER in circumstances when noise would normally overwhelm the signal. This is the technique used to boost Bluetooth low energy’s range in the latest version (5) of the technology. The downside is the corrected packets demand greater system overheads compromising bandwidth.',
            'authorName':'Raouf Meziani',
            'authorImg':'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Webutvecklare',
        },
        {
            "id":3,
            'title':'Blog 3',
            'desc':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, id necessitatibus! Explicabo ex eveniet blanditiis. Tempore iusto repellat at optio tenetur. Iusto nisi explicabo dolorem sit facilis, magni cum non?",
            'content': 'A radio technology such as Bluetooth low energy or zigbee is based on a series of trade-offs that add up to limit range. First, the technology takes advantage of the “2.4 GHz” (centered on 2.45 GHz) Industrial, Scientific, and Medical (ISM) license-free band, which is recognized globally and is free for use by any party. There are several alternatives for boosting range in Bluetooth low energy or zigbee applications. One is to employ a mesh network whereby signals are forwarded from node to node ensuring the outer reaches of the system can never be out of range. Mesh networking also offers the advantages of built in redundancy (a failed node can’t cause a system to fall over because signals can easily be rerouted) and simple scaling. The downside is a major increase in complexity and project overheads.Another solution is to build in error correction to packet transmission to hold down BER in circumstances when noise would normally overwhelm the signal. This is the technique used to boost Bluetooth low energy’s range in the latest version (5) of the technology. The downside is the corrected packets demand greater system overheads compromising bandwidth.',
            'coverImg':'https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?compress=1&resize=1600x1200&vertical=top',
            'authorName':'Raouf Meziani',
            'authorImg':'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Webutvecklare',
        },
    ]  */

   /*  let blog = blogs.filter(blog=> blog.id == id)
    blog = blog[0]
    console.log(blog) */
    
    
    
    


    
     return (
        
        
        
      <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm-grid-cols-3 ss:grid-cols- gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
               
                <div className='col-span-2 gap-x-8 gap-y-8'>
                    <img className='h-56 w-full object-cover' src={`http://localhost:8008${blog.attributes.coverImg.data.attributes.url}`}/>
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                    <div className='pt-5'><p className='line-break'>{blog.attributes.blogContent}</p>

                    </div>
                    
                  </div>

                  <div className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
                    <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={`http://localhost:8008${blog.attributes.authorImg.data.attributes.url}`} />
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h1>
                        <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
                    </div>

                </div>

            </div>

        </div> 
    </div> 
     
     
     )

    

    
}

export default BlogContent