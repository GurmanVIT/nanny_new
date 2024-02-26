import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import visa_payment_card from '../../assets/img/visa-payment-card.png';

const Paymentsuser = () => {
  return (
    <div className="row" >
      <div className="col-12">
        <div className="d-flex align-items-center mb-3 justify-content-between heading_back_btn">
          <div className="d-flex align-items-center">
            {/*<button ><ArrowBackIosNewIcon/></button>*/}
            <h4 className="m-0">Cards</h4>
          </div>
          <button className="btn profile_button card_type d-flex align-items-center rounded">
            <AddIcon /> Add Card
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="p-3 card_box">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="card_icon">
                  <img width="w-100" src={visa_payment_card} alt='visa' />
                </div>
                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
              </div>
              <h6 className="mb-3">2521 2521 5252 5215</h6>
              <div className="d-flex align-items-center justify-content-between">
                <div className="holder_details">
                  <h6 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h6>
                  <h6 className="mb-0">Expired<span className="ms-2">jhngnn</span></h6>
                </div>
                <button className="delete_btn"><DeleteForeverIcon /></button>
              </div>
            </div>
          </div >
          <div className="col-md-6 ">
            <div className="p-3 card_box">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="card_icon">
                  <img width="w-100" src={visa_payment_card} alt='visa' />
                </div>
                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
              </div>
              <h6 className="mb-3">2521 2521 5252 5215</h6>
              <div className="d-flex align-items-center justify-content-between">
                <div className="holder_details">
                  <h6 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h6>
                  <h6 className="mb-0">Expired<span className="ms-2">jhngnn</span></h6>
                </div>
                <button className="delete_btn"><DeleteForeverIcon /></button>
              </div>
            </div >
          </div >
          <div className="col-md-6 ">
            <div className="p-3 card_box">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="card_icon">
                  <img width="w-100" src={visa_payment_card} alt='visa' />
                </div>
                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
              </div>
              <h6 className="mb-3">2521 2521 5252 5215</h6>
              <div className="d-flex align-items-center justify-content-between">
                <div className="holder_details">
                  <h6 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h6>
                  <h6 className="mb-0">Expired<span className="ms-2">jhngnn</span></h6>
                </div>
                <button className="delete_btn"><DeleteForeverIcon /></button>
              </div>
            </div >
          </div >
          <div className="col-md-6 ">
            <div className="p-3  card_box">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="card_icon">
                  <img width="w-100" src={visa_payment_card} alt='visa' />
                </div>
                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
              </div>
              <h6 className="mb-3">2521 2521 5252 5215</h6>
              <div className="d-flex align-items-center justify-content-between">
                <div className="holder_details">
                  <h6 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h6>
                  <h6 className="mb-0">Expired<span className="ms-2">jhngnn</span></h6>
                </div>
                <button className="delete_btn"><DeleteForeverIcon /></button>
              </div>
            </div >
          </div >
          <div className="col-md-6">
            <div className="p-3 card_box">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="card_icon">
                  <img width="w-100" src={visa_payment_card} alt='visa' />
                </div>
                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
              </div>
              <h6 className="mb-3">2521 2521 5252 5215</h6>
              <div className="d-flex align-items-center justify-content-between">
                <div className="holder_details">
                  <h6 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h6>
                  <h6 className="mb-0">Expired<span className="ms-2">jhngnn</span></h6>
                </div>
                <button className="delete_btn"><DeleteForeverIcon /></button>
              </div>
            </div >
          </div >
        </div >
      </div >
    </div>
  )
}

export default Paymentsuser
