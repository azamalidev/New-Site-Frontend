import React, { useState, useEffect } from 'react';
import Footer from '../components/footur';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../redux/action/request';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { courseDetail } = useSelector((state) => state.auth);
   console.log(courseDetail, "courseDetail")
  useEffect(() => {
    dispatch(getCourseById(id));
  }, [1000]);
  return (
    <div>
      <Header />
      <h2>Course Detail</h2>
      <h5>{courseDetail?.title}</h5>
      <Footer />
    </div>
  );
}
