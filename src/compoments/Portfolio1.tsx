import Link from "next/link";
import React from "react";

export default function Portfolio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>การเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</p>
                <p>
                  คือ การนำเทคโนโลยีมาพัฒนาการบริหารและบริการ เช่น e-Government,
                  Big Data, AI และการพัฒนาบุคลากรดิจิทัล เพื่อเพิ่มประสิทธิภาพ
                  โปร่งใส และตอบสนองประชาชนได้ดีขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-1-66.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงในภาครัฐให้เกิดประสิทธิผล</h3>
                <p>
                  ต้องอาศัยการวางแผนที่ชัดเจน ผู้นำที่เข้มแข็ง
                  การมีส่วนร่วมของบุคลากร การใช้เทคโนโลยีให้เหมาะสม
                  และการติดตามประเมินผลอย่างต่อเนื่อง
                  เพื่อให้การเปลี่ยนแปลงเป็นไปอย่างมีประสิทธิภาพและยั่งยืน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-67-71.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเปลี่ยนแปลงสู่องค์การดิจิทัล องค์การเสมือนจริง
                  และองค์การอัจฉริยะ
                </h3>
                <p>
                  <li>
                    ต้องใช้เทคโนโลยีดิจิทัลพัฒนาองค์กรให้ทำงานคล่องตัว (Digital
                    Organization)
                  </li>{" "}
                  <li>เปิดทางให้การทำงานไร้ขอบเขต (Virtual Organization)</li>{" "}
                  <li>
                    และใช้ระบบอัจฉริยะช่วยตัดสินใจ (Intelligent Organization)
                  </li>
                  พร้อมพัฒนาบุคลากรและวัฒนธรรมองค์กรให้สอดรับกับยุคดิจิทัล
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-72-75.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเแปลี่ยนแปลง</h3>
                <p>
                  <li>
                    ความมุ่งมั่นในการเปลี่ยนแปลง –
                    การตั้งเป้าหมายและทำความเข้าใจการเปลี่ยนแปลงอย่างชัดเจน
                  </li>
                  <li>
                    การจัดลำดับความสำคัญ –
                    การจัดลำดับความสำคัญอย่างเหมาะสมและไม่ทำให้เกิดการเปลี่ยนแปลงที่มากเกินไป
                  </li>
                  <li>
                    ทรัพยากรและความรู้ความสามารถที่เพียงพอ –
                    การประเมินความพร้อมด้านกำลังคนและทรัพยากร
                  </li>
                  <li>
                    หน้าที่ความรับผิดชอบที่ชัดเจน –
                    การกำหนดหน้าที่ให้ชัดเจนในทุกขั้นตอนเพื่อเพิ่มประสิทธิภาพ
                  </li>
                  <li>
                    การพัฒนาอย่างต่อเนื่อง –
                    ความสามารถในการปรับแผนและแก้ปัญหาเฉพาะหน้า
                  </li>
                  <li>
                    การวางแผนล่วงหน้าถึงความยั่งยืน –
                    การวางแผนเพื่อให้การเปลี่ยนแปลงยั่งยืนในระยะยาว
                  </li>
                  <li>
                    การจัดการโครงการที่ดี – การสร้างความเข้าใจร่วมกัน
                    การสื่อสารที่ชัดเจน และการกำหนดมาตรฐานขั้นตอนการดำเนินการ
                  </li>
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-76-78.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลงในภาครัฐ</h3>
                <p>
                  การสร้างความพร้อมในการเปลี่ยนแปลงในภาครัฐเป็นกระบวนการที่สำคัญเพื่อให้ภาครัฐสามารถตอบสนองต่อความต้องการของประชาชนและสิ่งแวดล้อมที่เปลี่ยนแปลงไปอย่างมีประสิทธิภาพ
                  การเปลี่ยนแปลงในภาครัฐไม่เพียงแต่เกี่ยวข้องกับการปรับปรุงนโยบายหรือกระบวนการทำงาน
                  แต่ยังเกี่ยวข้องกับการสร้างวัฒนธรรมองค์กรที่เปิดรับนวัตกรรมและการพัฒนาบุคลากรที่มีความสามารถในการรับมือกับการเปลี่ยนแปลงด้วย
                  การวางแผนและเตรียมความพร้อมเหล่านี้เป็นกุญแจสำคัญในการทำให้การเปลี่ยนแปลงในภาครัฐเกิดขึ้นได้อย่างยั่งยืนและมีประสิทธิภาพ
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-79-82.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบการสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  การสำรวจความพร้อมในการเปลี่ยนแปลงในภาครัฐเป็นกระบวนการที่ช่วยประเมินระดับความพร้อมขององค์กรในการรับมือกับการเปลี่ยนแปลงต่างๆ
                  ที่อาจเกิดขึ้น เช่น การปรับปรุงกระบวนการทำงาน
                  การใช้เทคโนโลยีใหม่ หรือการเปลี่ยนแปลงในด้านนโยบายและการจัดการ
                  โดยการสำรวจจะมุ่งเน้นไปที่หลายมิติ เช่น
                  ความเข้าใจและการยอมรับในความเปลี่ยนแปลงจากบุคลากร
                  การสนับสนุนจากผู้บริหาร การเตรียมความพร้อมของทรัพยากร
                  และการพัฒนาทักษะใหม่ๆ ของทีมงาน
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-83-85.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)</h3>
                <p>
                  เป็นปฏิกิริยาที่เกิดขึ้นเมื่อบุคคลหรือกลุ่มคนรู้สึกไม่พอใจหรือไม่ยินดีที่จะยอมรับสิ่งใหม่ที่เกิดขึ้นในสภาพแวดล้อมของพวกเขา
                  ไม่ว่าจะเป็นการเปลี่ยนแปลงในองค์กร สังคม หรือชีวิตส่วนตัว
                  การต่อต้านการเปลี่ยนแปลงนี้สามารถเกิดขึ้นได้จากหลายสาเหตุ เช่น
                  ความกลัวต่อสิ่งที่ไม่รู้จัก
                  ความวิตกกังวลเกี่ยวกับผลกระทบที่จะเกิดขึ้น
                  หรือความไม่มั่นใจในทิศทางที่กำลังจะเกิดขึ้น
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลงมีทั้งในระดับบุคคลและกลุ่ม
                  และสามารถมีผลกระทบทั้งในแง่บวกและลบ
                  ขึ้นอยู่กับการจัดการและวิธีการนำเสนอการเปลี่ยนแปลงนั้น ๆ
                  หากสามารถทำความเข้าใจและลดความกลัวหรือข้อกังวลได้
                  การเปลี่ยนแปลงก็สามารถนำมาซึ่งผลลัพธ์ที่ดีได้
                  แต่หากไม่ได้รับการจัดการอย่างถูกต้อง
                  ก็อาจนำไปสู่ปัญหาหรือความขัดแย้งที่ยากจะแก้ไข
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-86-89.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การเอาชนะการต่อต้านการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://primeast.com/us/insights/7-strategies-for-overcoming-resistance-to-change-in-the-workplace/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การเปลี่ยนแปลงองค์กรเป็นเรื่องยาก
                  </Link>
                </p>
                <p>
                  ในโลกทุกวันนี้
                  การเปลี่ยนแปลงคือสิ่งเดียวที่ไม่เปลี่ยนแปลงซึ่งรายล้อมเราอยู่
                  ในธุรกิจก็เช่นเดียวกัน สำหรับพนักงาน
                  การจัดการการเปลี่ยนแปลงอาจเป็นเรื่องยากและน่าหงุดหงิด
                  เมื่อมุ่งมั่นสู่การเปลี่ยนแปลงที่ประสบความสำเร็จ
                  เราต้องพิจารณาถึงการรับรู้ที่แตกต่างกันของผู้ที่ริเริ่มการเปลี่ยนแปลง
                  ผู้ดำเนินการเปลี่ยนแปลง
                  และผู้ได้รับผลกระทบจากการเปลี่ยนแปลงนั้น
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-90-92.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to
                  Change)
                </h3>
                <p>
                  เป็นขั้นตอนสำคัญที่ช่วยให้การเปลี่ยนแปลงมีทิศทางและสามารถดำเนินไปได้อย่างมีประสิทธิภาพ
                  วิสัยทัศน์ที่ชัดเจนและสร้างแรงบันดาลใจจะช่วยให้ทุกคนในองค์กรหรือกลุ่มที่เกี่ยวข้องเข้าใจถึงเหตุผลและเป้าหมายของการเปลี่ยนแปลง
                  ซึ่งเป็นการเชื่อมโยงระหว่างความต้องการของปัจจุบันกับทิศทางในอนาคต
                </p>
                <p>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลงต้องคำนึงถึงหลายปัจจัย เช่น
                  การระบุปัญหาที่ต้องการแก้ไข
                  การกำหนดเป้าหมายที่ชัดเจนและสามารถวัดผลได้
                  รวมถึงการสร้างความเชื่อมั่นและการสนับสนุนจากทุกฝ่ายที่เกี่ยวข้อง
                  วิสัยทัศน์ที่ดีไม่เพียงแต่ต้องมองเห็นผลลัพธ์ในระยะยาว
                  แต่ยังต้องสร้างความเข้าใจและความร่วมมือจากผู้มีส่วนเกี่ยวข้อง
                  เพื่อให้การเปลี่ยนแปลงสามารถเกิดขึ้นได้จริงและยั่งยืนในระยะยาว
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-93-98.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision)</h3>
                <p>
                  <Link
                    href="https://getlucidity.com/strategy-resources/5-steps-to-creating-your-company-vision-statement/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การกำหนดวิสัยทัศน์
                  </Link>
                </p>
                <p>
                  เป็นกระบวนการที่ช่วยให้การเปลี่ยนแปลงหรือการพัฒนาในอนาคตมีทิศทางที่ชัดเจนและเป็นรูปธรรม
                  การกำหนดวิสัยทัศน์ต้องมีขั้นตอนที่เป็นระบบเพื่อให้สามารถสื่อสารให้ทุกคนเข้าใจและร่วมกันดำเนินการได้อย่างมีประสิทธิภาพ
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-99-102.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การค้นหาผู้มีส่วนได้ส่วนเสีย ( Identification Key Stakeholder)
                </h3>
                <p>
                  <Link
                    href="https://www.productplan.com/glossary/stakeholder-analysis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การค้นหาผู้มีส่วนได้ส่วนเสีย
                  </Link>
                </p>
                <p>
                  เป็นกระบวนการสำคัญในการบริหารการเปลี่ยนแปลง
                  เพราะการเข้าใจและรู้จักผู้ที่มีผลกระทบหรือได้รับผลประโยชน์จากการเปลี่ยนแปลงจะช่วยให้สามารถบริหารการเปลี่ยนแปลงได้อย่างมีประสิทธิภาพ
                  การหาผู้มีส่วนได้ส่วนเสียสามารถทำได้ผ่านขั้นตอนต่าง ๆ
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-103-106.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การโน้มน้าวผู้มีส่วนได้ส่วนเสีย( Identification Stakeholder)
                </h3>
                <p>
                  เป็นกระบวนการสำคัญในการบริหารการเปลี่ยนแปลง
                  เพื่อให้ผู้มีส่วนได้ส่วนเสียยอมรับและสนับสนุนการเปลี่ยนแปลงที่เกิดขึ้น
                  การโน้มน้าวจะช่วยให้พวกเขาเห็นประโยชน์และเข้าใจถึงเหตุผลของการเปลี่ยนแปลงนั้น
                  ๆ และสามารถสร้างความร่วมมือในการดำเนินการให้สำเร็จ
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-107-110.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change Management
                  Structures)
                </h3>
                <p>
                  เป็นกลุ่มบุคคลที่ได้รับมอบหมายให้มีบทบาทในการวางแผน ดำเนินการ
                  และติดตามผลการเปลี่ยนแปลงในองค์กร
                  คณะทำงานนี้จะต้องมีการทำงานร่วมกันอย่างใกล้ชิดเพื่อให้การเปลี่ยนแปลงสามารถดำเนินไปได้ตามเป้าหมายและประสบความสำเร็จ
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-111-114.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง (Sustaining Momentum)</h3>
                <p>
                  กระบวนการที่มุ่งเน้นในการรักษาและสนับสนุนให้การเปลี่ยนแปลงที่ได้เริ่มต้นขึ้นดำเนินไปอย่างยั่งยืน
                  โดยไม่ให้เกิดการย้อนกลับไปสู่สถานะเดิม
                  หรือเกิดการต้านทานในระยะยาว
                  การประคับประคองนี้เป็นขั้นตอนที่สำคัญเพื่อให้การเปลี่ยนแปลงที่ดำเนินไปแล้วกลายเป็นส่วนหนึ่งของวัฒนธรรมและวิธีการทำงานในองค์กรอย่างถาวร
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-115-119.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  อ่านเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
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
