import React from "react";

export default function Blogpost2() {
  return (
    <div>
      <>
        {/* <title>Free Css Layout</title> */}
        <meta
          httpEquiv="content-type"
          content="text/html; charset=iso-8859-1"
        />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <div id="container">
          <div id="header">
            <h1>
              <a href="http://www.free-css.com/free-css-layouts.php">
                Free CSS Layouts
              </a>
            </h1>
          </div>
          <div id="wrapper">
            <div>
              <p className="lead">การวินิจฉัยระบบองค์กรภาครัฐ</p>
              <p>
                <strong>ทฤษฏีระบบ (System Theory)</strong>
              </p>
              <p>
                ทฤษฏีระบบ (System Theory)
                เป็นแนวคิดที่มององค์การเป็นระบบเปิดที่ซับซ้อน
                มีองค์ประกอบพื้นฐาน ดังนี้
                <ol className="ml-4" style={{ listStyleType: "decml" }}>
                  <li>
                    องค์การเป็นหน่วย (Entity) ที่ไม่แตกต่างจากระบบอื่น ซึ่งมี
                    Input คือวัตถุดิบ ความสามารถของพนักงานและเงินทุน
                    Transformation Process กระบวนการขององค์การ Output คือสินค้า
                    ข้อมูล บริการ Stakeholders ที่เกิดจากกระบวนการขององค์การ
                  </li>
                  <li>
                    สภาพแวดล้อมและขอบเขตขององค์การ(Environment and Boundaries)
                    องค์การมีลักษณะเปิดหรือปิด ดำรงอยู่ในสิ่งแวดล้อม (ลูกค้า
                    พันธมิตร คู่แข่ง แนวโน้มต่างๆ)
                    ที่เป็นประโยชน์หรือโทษต่อองค์การ เปลี่ยนแปลงช้าหรือเร็ว
                    ระบบต่างๆ ล้วนอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม
                    และตรงกันข้ามก็ส่งผลกระทบต่อสิ่งแวดล้อมรอบข้าง
                  </li>
                  <li>
                    ทุกส่วนเกี่ยวข้องกัน (All Parts Related)
                    ทุกส่วนของระบบมีความเกี่ยวข้องกัน
                    ถ้าส่วนใดส่วนหนึ่งเปลี่ยนแปลง ส่วนอื่นจะเปลี่ยนแปลงตาม
                    คือได้รับผลกระทบ
                  </li>
                  <li>
                    ข้อมูลป้อนกลับ (Feed-backs) องค์การได้รับข้อมูลป้อนกลับของ
                    Outputs จากสิ่งแวดล้อม ข้อมูลปรากฏอยู่ในหลายรูปแบบ เช่น
                    ผลการให้บริการจากหน่วยงานภาครัฐ ผลประกอบการ
                    ปฏิสัมพันธ์ที่เกิดกับองค์การอื่น
                  </li>
                  <li>
                    ภายในระบบมีปฏิสัมพันธ์กัน (Systems Within Systems)
                    <ul className="ml-4" style={{ listStyleType: "circle" }}>
                      <li>ระดับบุคคล</li>
                      <li>ระดับกลุ่ม</li>
                      <li>ระหว่างกลุ่ม</li>
                      <li>ระดับองค์การ</li>
                    </ul>
                  </li>
                </ol>
              </p>
              {/* <p className="lead">การวินิจฉัยระบบองค์กรภาครัฐ</p> */}
              <p>
                <strong>ทฤษฎีระบบ สามารถสรุปได้ดังนี้</strong>
              </p>
              <p>
                {/* ทฤษฏีระบบ (System Theory)
                เป็นแนวคิดที่มององค์การเป็นระบบเปิดที่ซับซ้อน
                มีองค์ประกอบพื้นฐาน ดังนี้ */}
                <ol className="ml-4" style={{ listStyleType: "decml" }}>
                  <li>
                    องค์การเป็นระบบที่มีขอบเขต Inputs วัตถุดิบ Suppliers
                    เงินทุน/แหล่งทุน ความสามารถของพนักงาน ผู้ถือหุ้น
                    นโยบายของรัฐบาล และกฎระเบียบต่างๆ Throughputs/Transformation
                    Process คือกระบวนการทำงาน กระบวนการแปลง Inputs เป็น Outputs
                    Outputs คือสิ้นค้า บริการ ข้อมูล ฯลฯ
                  </li>
                  <li>
                    องค์การและระบบย่อยทั้งหมดขององค์การทำหน้าที่ในลักษณะที่สอดประสานกัน
                    เพื่อให้บรรลุเป้าหมายขององค์การ
                    ทุกส่วนของระบบล้วนมีความเกี่ยวข้องกัน
                    เมื่อส่วนใดส่วนหนึ่งถูกเปลี่ยนแปลง ส่วนอื่นๆ
                    ก็จะได้รับผลกระทบ
                  </li>
                  <li>
                    กระบวนการภายในองค์การ จำเป็นต่อประสิทธิภาพและประสิทธิผล
                    รวมทั้งความสำเร็จขององค์การ กระบวนการผลิต ซึ่งรวบรวมและแปลง
                    Inputs เป็น Outputs กระบวนการสังคม
                    เกี่ยวข้องกับบุคคลและกลุ่มต่างๆ จนทำให้เกิดบรรทัดฐาน
                    และกระบวนการตอบสนองความต้องการของแต่ละบุคคล
                    ซึ่งมีอิทธิพลต่อความรู้สึกและความมุ่งมั่นของมนุษย์
                  </li>
                  <li>
                    องค์การและระบบย่อยทั้งหมดขององค์การ
                    เป็นหน่วยหนึ่งอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม
                    ที่สามารถส่งผลกระทบทั้งด้านบวกและลบต่อหน่วยนั้นๆ
                  </li>
                  <li>
                    องค์การได้รับข้อมูลป้อนกลับ (Feedback) เกี่ยวกับ Outputs
                    ของตนจากสิ่งแวดล้อม
                    ซึ่งช่วยให้องค์การสามารถดำเนินการเปลี่ยนแปลงต่างๆ
                    เพื่อให้การตอบสนองต่อสิ่งแวดล้อมดีขึ้น
                    โดยข้อมูลป้อนกลับจากลูกค้าเป็นสิ่งที่จำเป็นต่อความสำเร็จในระยะยาวขององค์การมากที่สุด
                  </li>
                </ol>
              </p>
              {/* <p className="lead">การวินิจฉัยระบบองค์กรภาครัฐ</p> */}
              <p>
                <strong>การวินิจฉัยระบบด้วย Weisbord’s Six-Box Model</strong>
              </p>
              <p>
                {/* ทฤษฏีระบบ (System Theory)
                เป็นแนวคิดที่มององค์การเป็นระบบเปิดที่ซับซ้อน
                มีองค์ประกอบพื้นฐาน ดังนี้ */}
                <ol className="ml-4" style={{ listStyleType: "decml" }}>
                  <li>
                    ความมุ่งหมาย (Purpose) หรือพันธกิจ (Mission) มีความชัดเจน
                    ได้รับการยอมรับจากพนักงานหรือไม่
                  </li>
                  <li>
                    โครงสร้าง (Structure) กิจกรรม/งานต่างๆ ถูกแบ่งในลักษณะใด
                    ช่วยตอบสนองต่อความมุ่งหมาย/พันธกิจอย่างมีประสิทธิภาพหรือไม่
                  </li>
                  <li>
                    ความสัมพันธ์ (Relationships)
                    การประสานงานระหว่างหน่วยงานเป็นไปด้วยดีหรือไม่
                    หรือก่อให้เกิดความขัดแย้งอย่างไร
                    และจัดการกับความขัดแย้งนั้นอย่างไร
                  </li>
                  <li>
                    รางวัล (Rewards) มีการให้รางวัลสำหรับผลงานที่ต้องการหรือไม่
                    หรือมีมาตรการลงโทษอย่างไร
                  </li>
                  <li>
                    การนำ (Leadership) นำการขับเคลื่อนองค์การ
                    มีหน้าที่กำกับติดตามความเป็นไป
                    หรือความสำเร็จขององค์ประกอบทั้ง 5 ด้าน
                  </li>
                  <li>
                    กลไกที่จำเป็น (Helpful Mechanism) องค์การมีเครื่องมือ
                    หรือเทคโนโลยีสำหรับการประสานงานระหว่างหน่วยงานต่างๆ
                    อย่างเพียงพอหรือไม่
                  </li>
                  <li>
                    ข้อดี ข้อเสียของ Model ข้อดี คือเป็น Model ที่เข้าใจง่าย
                    ข้อเสีย เป็นการวินิจฉัยระบบที่ขาดความรอบด้าน
                    เนื่องจากไม่ได้แสดงความเกี่ยวพันของแต่ละองค์ประกอบอย่างชัดเจน
                    รวมทั้งไม่ได้คำนึงถึงอิทธิพลของสิ่งแวดล้อม
                  </li>
                </ol>
              </p>
              <p>
                <strong>การวินิจฉัยระบบด้วยการวิเคราะห์ข้อมูล Big Data</strong>
              </p>
              <p>
                การวิเคราะห์ข้อมูล Big Data เพื่อการตัดสินใจ และการพัฒนา AI
                ในหน่วยงานภาครัฐ เป็นการวิเคราะห์ข้อมูลขนาดใหญ่ (Big Data)
                ซึ่งเป็นข้อมูลจากการรายงานผลตัวชี้วัดของหน่วยงานภาครัฐและเอกชน
                เช่น ตัวชี้วัดความยากจนและการกระจายรายได้ แล้วนำมาวิเคราะห์
                Visualization เปรียบเทียบแนวโน้มระหว่างปีและระหว่างประเทศ
                และวิเคราะห์ Multiple Regression
                เพื่อการพยากรณ์หรือประมาณการเพื่อนำผลการวิเคราะห์มาใช้พัฒนาองค์การ/ประเมินนโยบายสาธารณะ/ปรับปรุงการทำงานของหน่วยงานภาครัฐ
                <p>
                  <strong>
                    กระบวนการวิเคราะห์ข้อมูลนำไปสู่การพัฒนานวัตกรรม AI
                  </strong>
                </p>
                <ul className="ml-5" style={{ listStyle: "decimal" }}>
                  <li>Big Data</li>
                  <li>Information</li>
                  <li>Knowledge</li>
                  <li>Wisdom</li>
                  <li>Innovation</li>
                </ul>
              </p>
              <p>
                <strong>ประเภทของข้อมูล Big Data</strong>
              </p>
              <ul className="ml-5" style={{ listStyleType: "disc" }}>
                <li>Structured Data (ข้อมูลที่มีโครงสร้าง)</li>
                <li>Unstructured Data (ข้อมูลที่ไร้โครงสร้าง)</li>
                <li>Semi Structured Data (ข้อมูลกึ่งโครงสร้าง)</li>
              </ul>
              <p>
                <strong>
                  ลักษณะของข้อมูล Big Data (4 Vs:
                  Volume-Velocity-Variety-Veracity)
                </strong>
              </p>
              <ul className="ml-5" style={{ listStyleType: "decimal" }}>
                <li>Volume ข้อมูลที่มีปริมาณมากมหาศาล</li>
                <li>Velocity ข้อมูลมีอัตราการเปลี่ยนแปลงแบบ Real-time</li>
                <li>Variety ข้อมูลที่มีความหลากหลายและซับซ้อน</li>
                <li>Veracity ข้อมูลที่มีความไม่ชัดเจน</li>
              </ul>
              <p>
                <strong>ข้อมูล Big Data เกิดขึ้นได้อย่างไร</strong>
              </p>
              <ul className="ml-5" style={{ listStyleType: "disc" }}>
                <li>
                  Big Dataเกิดจากพฤติกรรมมนุษย์
                  <ul className="ml-4" style={{ listStyleType: "circle" }}>
                    <li>Shopping/ทำกิจกรรมต่างๆ</li>
                    <li>การไปหาหมอ เพื่อรักษาพยาบาล</li>
                  </ul>
                </li>
                <li>
                  Big Data เกิดจาก Machine
                  <ul className="ml-4" style={{ listStyleType: "circle" }}>
                    <li>Sensor การตรวจวัดอุณหภูมิ</li>
                    <li>การตรวจวัดอากาศ PM2.5</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>AI: Artificial Intelligence ปัญญาประดิษฐ์</strong>
              </p>
              <p>
                <strong>Machine Learning</strong>
              </p>
              <ul className="ml-5" style={{ listStyleType: "disc" }}>
                <li>
                  Supervised Learning เรียนรู้แบบมีผู้สอน (class/label/ target)
                </li>
                <li>Unsupervised Learning เรียนแบบไม่ต้องมีผู้สอน</li>
                <li>
                  Reinforcement Learning การให้ AI ไปอยู่ในสภาพแวดล้อมหนึ่ง
                  แล้วให้สามารถเอาตัวรอดได้ในสภาพแวดล้อมนั้น
                </li>
              </ul>
              <p>
                <strong>Quantum Machine Learning</strong>
              </p>
              <p>
                Google Quantum Computing มีความเร็วกว่าคอมพิวเตอร์ในปัจจุบัน 100
                ล้านเท่า แต่ต้องอยู่ในอุณหภูมิศูนย์สัมบูรณ์หรือ -273.15
                องศาเซลเซียส
              </p>
              <p>
                <strong>
                  เทคโนโลยี Quantum computer จะส่งผลกระทบกับอะไรบ้าง
                </strong>
              </p>
              <ul className="ml-5" style={{ listStyleType: "decimal" }}>
                <li>ความปลอดภัยในโลกดิจิตอล (Online security)</li>
                <li>การพัฒนายา (Drug development)</li>
                <li>
                  การทำนายสภาพอากาศ และภัยพิบัติทางธรรมชาติที่แม่นยำมากขึ้น
                </li>
                <li>การควบคุมจราจร (Traffic control)</li>
                <li>
                  Blockchain การพัฒนา Quantum Computers
                  ส่งผลให้เกิดความเสี่ยงในการเข้ารหัสข้อมูล
                </li>
                <li>
                  War พัฒนาอาวุธ หรือใช้ล้วงข้อมูลลับทางทหาร/ทางความมั่นคง
                </li>
              </ul>
              <p>
                <strong>Deep Learning</strong>
              </p>
              Deep Learning: การเรียนรู้ของเครื่องแบบเชิงลึก
              <p>
                <strong>
                  การวินิจฉัยระบบด้วย Nadler and Tushman’s Congruence Model
                </strong>
              </p>
            </div>
          </div>
          {/* <div id="navigation">
            <p>
              <strong>Navigation Here</strong>
            </p>
            <ul>
              <li>
                <a href="http://www.free-css.com/">Free CSS Templates</a>
              </li>
              <li>
                <a href="http://www.free-css.com/free-css-layouts.php">
                  Free CSS Layouts
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div id="extra">
            <p>
              <strong>More stuff here.</strong>
            </p>
            <p>
              sit malesuada lacus pellus parturpiscing. Pellenterdumat
              maecenatoque cras a magna nibh et quis diam ames et.
              Laoremvolutpat ac dolor eget eget temper lacus vestibus velit
              lacus venean. Magnaipsum tellus morbi leo aliquat nulla convallis
              pellentesque.
            </p>
          </div> */}
          <div id="footer">{/* <p>Footer</p> */}</div>
        </div>
      </>
    </div>
  );
}
