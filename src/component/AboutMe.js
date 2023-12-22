import React from "react";
function AboutMe() {
    return (
        <div className="container">
            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                <div className="col-lg-6 px-0">
                    <h1 className="display-4 fst-italic"><b>TextChanger</b> utility to converting text</h1>
                    <p className="lead my-3">Multiple lines of text can be change in differen type of Text by the help of the Following converter.</p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success-emphasis">UpperCase Button</strong>
                            <h3 className="mb-3">property</h3>
                            
                            <p className="card-text mb-auto">UpperCase converter button changes the text in uppercase from lower case.</p>

                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="./cc.png" alt="" width={200} height={250}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success-emphasis">LowerCase Button</strong>
                            <h3 className="mb-3">property</h3>
                            
                            <p className="card-text mb-auto">LowerCase converter button changes the text in LowerCase from Uppercase.</p>

                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="./cc.png" alt="" width={200} height={250}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-denger-emphasis">Clear Button</strong>
                            <h3 className="mb-3">Working</h3>
                            
                            <p className="card-text mb-auto">clear button  used to clear all the text input in the textarea.</p>

                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="./cc.png" alt="" width={200} height={250}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">Space Remove Button</strong>
                            <h3 className="mb-3">Feature</h3>
                            
                            <p className="card-text mb-auto">Remove extra space button clear the unwanted space from the text.</p>

                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="./cc.png" alt="" width={200} height={250}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-black-emphasis">Copy Button</strong>
                            <h3 className="mb-3">Functionality</h3>
                            
                            <p className="card-text mb-auto">Copy button used to copy the converted content in the clipbord</p>

                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="./cc.png" alt="" width={200} height={250}/>
                        </div>
                    </div>
                </div>


                
            </div>
        </div>

    )
}
export default AboutMe