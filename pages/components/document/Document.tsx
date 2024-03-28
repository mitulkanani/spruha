import Seo from "@/shared/layout-components/seo/seo";
import React from "react";
import dynamic from 'next/dynamic';
// const Datatable = dynamic(()=>import('../../../../shared/data/table/datatable'), { ssr: false })
// import DataTable from '../../../../shared/data/table/datatable';
import Datatable from '@/shared/data/table/datatable';
const Document = () => {
  return (
    <>
      <Datatable heading={'All Documents'} user={'1,487,000 users'}/>

    </>
  );
};
Document.layout = "Contentlayout";
export default Document;
