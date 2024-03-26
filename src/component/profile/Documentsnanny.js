import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Button } from 'react-bootstrap';
import Background from '../../assets/img/kycBG.svg';
import { DeleteForever } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { DocumentsnannyList } from '../../store/apiSlice/DocumentsnannySlice';
import { uploadFile } from '../../store/apiSlice/uploadFileSlice';
import { clearData, uploadDocuments } from '../../store/apiSlice/UpdateDocumentSlice';

const Documentsnanny = () => {

    const dispatch = useDispatch();
    const Uploaddocumentdata = useSelector((state) => state.rootReducer.DocumentsnannyReducer.data);
    const uploadFileData = useSelector((state) => state.rootReducer.uploadFileReducer.data);
    const uploadDocumentData = useSelector((state) => state.rootReducer.uploadDocumentsReducer.data);
    const [isFilled, setFilled] = useState(false)

    const [updateImageIndex, setUpdateImageIndex] = useState(-1)

    const [documents, setDocuments] = useState([{
        name: "",
        link: "",
        thumbnailLink: ""
    }])

    useEffect(() => {
        dispatch(DocumentsnannyList())

    }, [])


    useEffect(() => {
        console.log("uploaddocumentdata ===> ", Uploaddocumentdata)
        if (Uploaddocumentdata != null && Uploaddocumentdata.status === 1) {
            setDocuments(Uploaddocumentdata.data.documents)
        }
    }, [Uploaddocumentdata])


    const [divs, setDivs] = useState([{ id: 1 }]);
    const addDiv = () => {
        setDocuments([...documents, {
            name: "",
            link: "",
            thumbnailLink: ""
        }]);
        console.log("Divs ===> ", documents)
    };
    const removeDiv = (indexToRemove) => {
        const prevDocuments = [...documents]
        console.log("Documents ===> ", documents)
        prevDocuments.splice(indexToRemove, 1)
        console.log("Documents 2 ===> ", prevDocuments)
        setDocuments(documents)

    };

    const setDocumentName = (newName, index) => {
        setDocuments(documents => {
            const updatedDocuments = [...documents];
            updatedDocuments[index] = { ...updatedDocuments[index], name: newName };
            return updatedDocuments;
        });
    }



    const setDocumentImage = (pan_image_path, index) => {
        setUpdateImageIndex(index)

        dispatch(uploadFile(pan_image_path))

        console.log("Documents Image", documents)
    }

    const handleDocuments = () => {

        try {
            documents.forEach((element, index) => {
                if (element.link.length === 0 && element.name.length === 0) {
                    setFilled(true)
                    throw new Error('BreakException');
                }
                else if (index === documents.length - 1) {
                    setFilled(false)
                }
            });

            if (!isFilled) {
                const payload = {
                    "documents": documents
                }
                console.log(payload)
                dispatch(uploadDocuments(payload));
                // Handle success, e.g., navigate to another screen    
            }
            else {
                alert("Please add all documents and its name!")
            }
        } catch (e) {
            alert("Please add all documents and its name!")
            if (e.message !== 'BreakException') throw e;
        }
    };

    useEffect(() => {
        if (uploadFileData != null && updateImageIndex > -1) {
            console.log(uploadFileData)
            setDocuments(documents => {
                const updatedDocuments = [...documents];
                updatedDocuments[updateImageIndex] = { ...updatedDocuments[updateImageIndex], link: uploadFileData.Location };
                return updatedDocuments;
            });
        }
    }, [uploadFileData])

    useEffect(() => {
        console.log("uploadDocumentData ===> ", uploadDocumentData)
        if (uploadDocumentData != null && uploadDocumentData.status === 1) {
            alert("Document Uploaded Successfully")
        }
        return () => {
            dispatch(clearData())
        }
    }, [uploadDocumentData])

    return (
        <>
            <div className='doc_nanny'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Upload Documents</h5>
                            <div>
                                <Link className='me-1' onClick={addDiv}><AddIcon className='addicon icon_add' style={{ fill: "#89d6ce " }} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        {documents != null && documents.map((item, index) => (
                            <div key={"" + index} className="added-div mt-4">
                                <div className='upload mt-3 upload-new'>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="input-item input-with-label">
                                                <label className="input-item-label">Documents Name <span className="text-danger">*</span></label>
                                                <input className="w-100 input-group" type="text" value={item.name} placeholder='Documents Name' onChange={(e) => setDocumentName(e.target.value, index)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className='d-flex align-items-center justify-content-around'>
                                                <div className="upload-box" style={{ backgroundImage: `url(${item.link === '' ? Background : item.link})` }} >
                                                    <div className="upload-zone dropzone dz-clickable">
                                                        <div className="dz-message" data-dz-message="">
                                                            <input id='doc-front' type="file" className='temprary-input' accept="image/*" onChange={(e) => { setDocumentImage(e.target.files[0], index) }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {documents.length > 1 &&
                                                    <Link onClick={() => removeDiv(index)} className='text-danger'><DeleteForever /></Link>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-12'>
                        <div className='mt-3'>
                            <Button type='button' className='main-button mb-0 btn save-btn' onClick={() => handleDocuments()}>SAVE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Documentsnanny
