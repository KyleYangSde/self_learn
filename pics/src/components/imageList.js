import React from "react";
import "./imageList.css";
import ImageCard from "./imageCard.js";
/**
 * number = [0,1,2,3,4];
 * create a new array and multiply 10
 * for push
 * map是将遍历数组 返回一个全新的array
 * number.map(function)
 * number.map((数组里的每个元素num)=>{
 *      return num*10；
 * })
 */
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

/**
 * react 会根据未更新的再更新
 * 已更新的不会再更新 不会改变dom里面的内容
 * 更有效率  key
 * 都会有id属性 来确认这条数据
 */

/***
 * grid css system
 */
