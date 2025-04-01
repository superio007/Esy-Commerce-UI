import React from 'react'
import styles from "../../css/DataLabelingAnnotation.module.css";
const DataLabelingAnnotation = () => {
    return (
      <>
        <div className="bg-[#007fff]">
          <section
            className={`${styles.DataLabelingAnnotation} xl:px-16 p-3 py-[80px] 3xl:mx-auto 3xl:max-w-screen-xl`}
          >
            <h1 className="text-[45px] font-bold text-center text-white capitalize">
              Data Labeling & Annotation
            </h1>
          </section>
        </div>
      </>
    );
}
export default DataLabelingAnnotation;