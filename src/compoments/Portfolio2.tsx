import React from "react";

export default function Portfolio2() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การจัดกิจกรรมเพื่อการพัฒนาองค์การภาครัฐ<small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">หน้าหลัก</a>
              </li>
              <li className="breadcrumb-item active">
                การจัดกิจกรรมเพื่อการพัฒนาองค์การภาครัฐ
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img className="card-img-top" src="images/p4.jpg" alt="" />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a
                      href="assets/organization intervention/organization intervention 1-41.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      การบริหารผลงาน{" "}
                    </a>
                  </h4>
                  <p className="card-text">
                    การบริหารผลงาน คือ กระบวนการบริหารเชิงยุทธศาสตร์
                    ที่มุ่งทำให้ทั้งองค์การและบุคลากร
                    ทำงานบรรลุผลสำเร็จตามเป้าหมาย
                    โดยการปรับปรุงผลการปฏิบัติงานขององค์การ หน่วยงาน
                    และพนักงานแต่ละคน และพัฒนาขีดความสามารถของพนักงานในทุกระดับ
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img className="card-img-top" src="images/p5.jpg" alt="" />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a
                      href="assets/organization intervention/organization intervention 42-75.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      การปรับโครงสร้างองค์การ{" "}
                    </a>
                  </h4>
                  <p className="card-text">
                    การปรับโครงสร้างองค์กรหมายถึงกระบวนการปรับโครงสร้างลำดับชั้น
                    โครงสร้างภายใน หรือขั้นตอนการดำเนินงานของบริษัท บริษัทต่างๆ
                    ดำเนินการปรับโครงสร้างเพื่อบรรลุเป้าหมายบางประการ เช่น
                    เพื่อให้สามารถแข่งขันได้มากขึ้นหรือตอบสนองต่อการเปลี่ยนแปลง
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img className="card-img-top" src="images/p6.jpg" alt="" />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a
                      href="assets/organization intervention/organization intervention 76-111.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      การมีส่วนร่วมของพนักงาน
                    </a>
                  </h4>
                  <p className="card-text">
                    การมีส่วนร่วมของพนักงานคือการได้รับรวมเป็นส่วนหนึ่งของทีมอย่างเต็มตัว
                    มุ่งเน้นไปที่เป้าหมายที่ชัดเจน ได้รับความไว้วางใจและอำนาจ
                    ได้รับการตอบรับเชิงบวกและสร้างสรรค์อย่างสม่ำเสมอ
                    ได้รับการสนับสนุนในการพัฒนาทักษะใหม่ๆ
                    ได้รับการขอบคุณและได้รับการยอมรับสำหรับความสำเร็จ
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img className="card-img-top" src="images/p7.jpg" alt="" />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a
                      href="assets/organization intervention/organization intervention 112-142.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      กลยุทธ์การแข่งขันและการร่วมมือ
                    </a>
                  </h4>
                  <p className="card-text">
                    เป้าหมายของกลยุทธ์การแข่งขันแบบร่วมมือกันคือการทำให้คู่แข่งหลุดพ้นจากเกมผลรวมเป็นศูนย์
                    ซึ่งผู้ชนะจะได้ทุกอย่างและผู้แพ้ต้องอยู่เฉยๆ โมเดล Value Net
                    แทนที่แนวทางนั้นด้วยเกมผลรวมบวก ในโมเดลนี้
                    ผลลัพธ์จะสร้างกำไรให้กับคู่แข่งทั้งหมดเมื่อพวกเขาทำงานร่วมกัน
                  </p>
                  {/* </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Morbi eu nulla ac mauris euismod aliquet.</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}
                  {/* </div>
              </div>
            </div>
            <div className="col-lg-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Morbi eu nulla ac mauris euismod aliquet.</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit aliquam aperiam nulla perferendis dolor nobis numquam,
                    rem expedita, aliquid optio, alias illum eaque. Non magni,
                    voluptates quae, necessitatibus unde temporibus.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
