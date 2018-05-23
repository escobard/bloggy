import React from 'react'
import PropTypes from "prop-types";

const JobReview = ({reviewData}) =>{
  console.log(reviewData)
  return(
    <div>
      <h2>Review Job</h2>
    </div>
  )   
}

JobReview.defaultProps = {
  reviewData: "reviewData"
};

JobReview.propTypes = {
  reviewData: PropTypes.object
};

export default JobReview 