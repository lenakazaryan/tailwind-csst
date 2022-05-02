import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 10px;
  padding: 0.25em 1em;
  background-color: palevioletred;
`

const Description = () => {
    return (
        <div className="m-20">
            <h3 className="text-center italic text-3xl">We are Andia a super cool design agency</h3>
            <p className="text-center italic text-lg">We design beautiful websites, logos and prints. Your project is
                safe with us.</p>
            <div className="flex flex-row justify-center flex-wrap">
                <div className="w-64 h-60 m-10 bg-gray-200 border-b-4 border-pink-500 p-3">
                    <img className="content-center w-14 h-14 m-auto"
                         src="https://clipart-best.com/img/eye/eye-clip-art-8.png"></img>
                    <p className="text-center">BEAUTIFUL WEBSITES</p>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. </p>
                    {/*<Button>Read More</Button>*/}
                    <Button className="hover:bg-pink-300">Read more</Button>
                </div>
                <div className="w-64 h-60 m-10 bg-gray-200 border-b-4 border-pink-500 p-3">
                    <img className="content-center w-14 h-14 m-auto"
                         src="https://mobileimages.lowes.com/productimages/1bcdb6cc-c5f2-4c4f-a991-79e7f06ab681/16558053.jpg?size=xl"></img>
                    <p className="text-center text-sm">BEAUTIFUL WEBSITES</p>
                    <p className="text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. </p>
                    <Button className="hover:bg-pink-300 m-8">Read more</Button>
                </div>
                <div className="w-64 h-60 m-10 bg-gray-200 border-b-4 border-pink-500 p-3">
                    <img className="content-center w-14 h-14 m-auto"
                         src="https://pngimg.com/uploads/pen/pen_PNG7404.png"></img>
                    <p className="text-center">BEAUTIFUL WEBSITES</p>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. </p>
                    {/*<Button>Read More</Button>*/}
                    <Button className="hover:bg-pink-300">Read more</Button>
                </div>
                <div className="w-64 h-60 m-10 bg-gray-200 border-b-4 border-pink-500 p-3">
                    <img className="content-center w-14 h-14 m-auto"
                         src="https://static.wixstatic.com/media/2cd43b_3deeb7f5145c43dabe2a4a2b017f5970~mv2.png/v1/fill/w_256,h_256,q_90/2cd43b_3deeb7f5145c43dabe2a4a2b017f5970~mv2.png"></img>
                    <p className="text-center">BEAUTIFUL WEBSITES</p>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. </p>
                    {/*<Button>Read More</Button>*/}
                    <Button className="hover:bg-pink-300">Read more</Button>
                </div>

            </div>
        </div>
    )
}

export default Description;