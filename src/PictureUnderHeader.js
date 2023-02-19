import headerPic from './img/title-img.jpg'

function PictureUnderHeader() {
  return (
    <div className="img-title">
        <div className="img-title-content">
            <img src={headerPic} alt="" />
        </div>
    </div>
  )
}

export default PictureUnderHeader