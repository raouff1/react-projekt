import React from 'react';
import {Link} from 'react-router-dom';

const Blogs = ({blogs}) => {
    

    const blogs1=[
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

            "id":5,
            'title':'Blog 5',
            'desc':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, id necessitatibus! Explicabo ex eveniet blanditiis. Tempore iusto repellat at optio tenetur. Iusto nisi explicabo dolorem sit facilis, magni cum non?",
            'content': 'A radio technology such as Bluetooth low energy or zigbee is based on a series of trade-offs that add up to limit range. First, the technology takes advantage of the “2.4 GHz” (centered on 2.45 GHz) Industrial, Scientific, and Medical (ISM) license-free band, which is recognized globally and is free for use by any party. There are several alternatives for boosting range in Bluetooth low energy or zigbee applications. One is to employ a mesh network whereby signals are forwarded from node to node ensuring the outer reaches of the system can never be out of range. Mesh networking also offers the advantages of built in redundancy (a failed node can’t cause a system to fall over because signals can easily be rerouted) and simple scaling. The downside is a major increase in complexity and project overheads.Another solution is to build in error correction to packet transmission to hold down BER in circumstances when noise would normally overwhelm the signal. This is the technique used to boost Bluetooth low energy’s range in the latest version (5) of the technology. The downside is the corrected packets demand greater system overheads compromising bandwidth.',
            'coverImg':'https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?compress=1&resize=1600x1200&vertical=top',
            'authorName':'Raouf Meziani',
            'authorImg':'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Webutvecklare',

            
        },
    ]

    


    
    
    return (
        <div className='w-full bg-[#f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 gap-8 px-4 text-black'>

        
        {blogs.data.map((blog)=>

            <Link to= {`/blog/${blog.id}`}>
           <div className='bg-white rounded-x1 overflow-hidden drop-shadow-md'>
           <img className='h-56 w-full object-cover' src={`http://localhost:8008${blog.attributes.coverImg.data.attributes.url}`}/>
           <div className='p-8'>
        <h3 className='font-bold text-2x1 my-1'>{blog.attributes.blogTitle}</h3>
          <p className='text-gray-600 text-xl'>{blog.attributes.blogDesc}</p>

        </div>



    </div>


</Link>



)}
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    {/*blogs1.map((blog)=>

                    {<Link to= {`/blog/${blog.id}`}>
                      <div className='bg-white rounded-x1 overflow-hidden drop-shadow-md'>
                         <img className='h-56 w-full object-cover' src={blog.coverImg}/>
                         <div className='p-8'>
                              <h3 className='font-bold text-2x1 my-1'>{blog.title}</h3>
                              <p className='text-gray-600 text-xl'>{blog.desc}</p>

                        </div>
    


                    </div>
                    
                    
                    </Link>

            

                    )}*/}

                    
            
        
    

                </div>
 
    

            </div>



        </div>
    )
}

export default Blogs