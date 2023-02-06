<template>
  <section class="table_wrap">
    <!-- 搜索 -->
    <div class="search_wrap">
      <el-date-picker
        v-model="collectDate"
        type="daterange"
        range-separator="至"
        start-placeholder="选择起始时间"
        end-placeholder="选择结束时间"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        @change="getQueryDate" />

      <el-select v-model="queryParams.type" placeholder="请选择类型" @change="selectRecord">
        <el-option label="总记录" value="0"></el-option>
        <el-option label="有效记录" value="1"></el-option>
      </el-select>

      <div class="btn_wrap">
        <el-button type="primary" @click="handleQuery" :disabled="btnDisabled">查询</el-button>
        <el-button type="primary" plain @click="resetQuery">重置</el-button>
      </div>
    </div>

    <el-table :data="collectTabelData" v-loading="loading" class="table_cont" height="250">
      <el-table-column label="序号" type="index" width="55" fixed align="center"></el-table-column>
      <!-- 营收数据(每天) -->
      <template v-if="dataInfoId === '1'">
        <el-table-column prop="serviceAreaId" label="服务区ID"></el-table-column>
        <el-table-column prop="serverpartName" label="服务区名称" width="95"></el-table-column>
        <el-table-column prop="bunkNo" label="铺位编号"></el-table-column>
        <el-table-column prop="serverpartshopName" label="门店名称"></el-table-column>
      </template>
      <!-- 营收数据(服务区) -->
      <template v-if="dataInfoId === '2'">
        <el-table-column prop="serverpartName" label="服务区名称" width="95"></el-table-column>
        <el-table-column prop="bunkNo" label="铺位编号"></el-table-column>
        <el-table-column prop="serverpartshopName" label="门店名称"></el-table-column>
      </template>
      <!-- 人流量 -->
      <template v-if="dataInfoId === '3'">
        <el-table-column prop="serviceAreaId" label="服务区ID"></el-table-column>
        <el-table-column prop="remark" label="服务区名称" width="95"></el-table-column>
        <el-table-column prop="numberPeople" label="人数"></el-table-column>
        <el-table-column prop="dateDay" label="日期 "></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
      </template>
      <!-- 车流量 -->
      <template v-if="dataInfoId === '4'">
        <el-table-column prop="quantity" label="数量"></el-table-column>
        <el-table-column prop="vehicleClassification" label="车辆分类 "></el-table-column>
        <el-table-column prop="dateDay" label="日期"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="remark" label="服务区名称" width="95"></el-table-column>
      </template>
      <!-- 商品明细销量 -->
      <template v-if="dataInfoId === '5'">
        <el-table-column prop="serviceAreaId" label="服务区ID"></el-table-column>
        <el-table-column prop="remark" label="服务区名称" width="90"></el-table-column>
        <el-table-column prop="bunkNo" label="铺位编号"></el-table-column>
        <el-table-column prop="commodityName" label="商品名称 "></el-table-column>
        <el-table-column prop="commodityClassification" label="商品分类"></el-table-column>
        <el-table-column prop="quantityGoods" label="商品数量"></el-table-column>
        <el-table-column prop="unitPrice" label="单价"></el-table-column>
        <el-table-column prop="unitPrice" label="金额"></el-table-column>
        <el-table-column prop="dateDay" label="日期"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
      </template>
      <!-- 服务区基本信息 -->
      <template v-if="dataInfoId === '6'">
        <el-table-column prop="serviceAreaId" label="服务区ID" width="120"></el-table-column>
        <el-table-column prop="serviceAreaName" label="服务区名称" width="95"></el-table-column>
        <template v-if="tableType === '0'">
          <el-table-column prop="did" label="业务主键" width="155"></el-table-column>
          <el-table-column prop="companyId" label="一级公司"></el-table-column>
          <el-table-column prop="companyLabel" label="一级公司名称" width="100"></el-table-column>
          <el-table-column prop="deptId" label="二级部门"></el-table-column>
          <el-table-column prop="deptLabel" label="二级部门名称" width="100"></el-table-column>
          <el-table-column prop="createId" label="创建人ID"></el-table-column>
          <el-table-column prop="createName" label="创建人姓名" width="95"></el-table-column>
          <el-table-column prop="checkTime" label="审批通过" width="120"></el-table-column>
          <el-table-column prop="registeredNameOfBusinessLicense" label="营业执照登记名称" width="126"></el-table-column>
          <el-table-column prop="registeredNameOfBusinessLicenseLabel" label="营业执照登记名称_中文" width="160"></el-table-column>
          <el-table-column prop="legalRepresentative" label="法定代表人" width="120"></el-table-column>
          <el-table-column prop="completionTimeOfServiceArea" label="服务区建成时间" width="125"></el-table-column>
          <el-table-column prop="transformationStatusOfServiceArea" label="服务区改造状态" width="125"></el-table-column>
          <el-table-column prop="transformationStatusOfServiceAreaLabel" label="服务区改造状态_中文" width="160"></el-table-column>
          <el-table-column prop="openingDate" label="首次开业时间" width="125"></el-table-column>
          <el-table-column prop="operationTimeOfTheLastTransformation" label="最近改造后开业时间" width="145"></el-table-column>
          <el-table-column prop="insideAndOutsideTheProvince" label="省内外"></el-table-column>
          <el-table-column prop="insideAndOutsideTheProvinceLabel" label="省内外_中文" width="125"></el-table-column>
          <el-table-column prop="station" label="桩号" width="125"></el-table-column>
          <el-table-column prop="geographicalPosition" label="地理地址" width="195"></el-table-column>
          <el-table-column prop="mobilePhoneNumberOfActualPersonInCharge" label="实际负责人手机号" width="125"></el-table-column>
          <el-table-column prop="interfaceDate" label="接口获取日期" width="125"></el-table-column>
        </template>
        <template v-else>
          <el-table-column prop="regionCode" label="所属区域编码" width="125"></el-table-column>
          <el-table-column prop="regionName" label="所属区域"></el-table-column>
          <el-table-column prop="roadSection" label="所属路段"></el-table-column>
          <el-table-column prop="businessLicensePersonInCharge" label="营业执照登记负责人" width="145"></el-table-column>
          <el-table-column prop="businessLicenseRegisteredName" label="营业执照登记名称" width="126"></el-table-column>
          <el-table-column prop="businessLicenseIssueDate" label="营业执照核发日期" width="130"></el-table-column>
          <el-table-column prop="businessLicenseNatureOfBusiness" label="执照登记经营范围" width="130"></el-table-column>
          <el-table-column prop="partitionUplinkDownlink" label="服务区分区概况上下行" width="150"></el-table-column>
          <el-table-column prop="geographicalPosition" label="地理位置" width="160"></el-table-column>
          <el-table-column prop="geographicalDivision" label="地理分区"></el-table-column>
          <el-table-column prop="openingTime" label="开业时间"></el-table-column>
          <el-table-column prop="actualLandArea" label="服务区实际用地（亩/平方米）" width="150"></el-table-column>
          <el-table-column prop="builtUpArea" label="建筑面积(平方米)"></el-table-column>
          <el-table-column prop="operatingArea" label="经营面积(平方米)"></el-table-column>
          <el-table-column prop="cementPlateAsphaltPavementArea" label="水泥板块及沥青路面面积(平方米)" width="150"></el-table-column>
          <el-table-column prop="afforestedArea" label="绿化面积(平方米)"></el-table-column>
          <el-table-column prop="numberSmallParkingSpaces" label="小车位数量(个)" width="120"></el-table-column>
          <el-table-column prop="numberPassengerSeats" label="客车位数量(个)" width="120"></el-table-column>
          <el-table-column prop="numberTruckSpaces" label="货车位数量(个)" width="120"></el-table-column>
          <el-table-column prop="numberParkingSpacesHazardousChemicals" label="危化品车位数量(个)" width="120"></el-table-column>
          <el-table-column prop="publicToiletArea" label="公共卫生间面积(平方米)" width="120"></el-table-column>
          <el-table-column prop="areaOfMensToilet" label="男卫生间面积(平方米)" width="120"></el-table-column>
          <el-table-column prop="numberUrinalsInMensToilet" label="男卫生间小便位数量(个)" width="120"></el-table-column>
          <el-table-column prop="numberBigMensToilet" label="男卫生间大便位数量(个)" width="120"></el-table-column>
          <el-table-column prop="numberFaucetsInMensToilet" label="男卫生间洗手位数量(个)" width="120"></el-table-column>
          <el-table-column prop="areaOfWomensToilet" label="女卫生间面积(平方米)" width="120"></el-table-column>
          <el-table-column prop="numberSeatsWomensToilet" label="女卫生间大便位数量(个)" width="120"></el-table-column>
          <el-table-column prop="numberFaucetsInWomensToilet" label="女卫生间洗手位数量(个)" width="120"> </el-table-column>
          <el-table-column prop="numberSecurityGuards" label="保安人员数" width="120"></el-table-column>
          <el-table-column prop="cleaningNumber" label="保洁人员数" width="120"></el-table-column>
          <el-table-column prop="serviceAreaStatus" label="服务区状态" width="120"></el-table-column>
          <el-table-column prop="serviceAreaStatusLabel" label="服务区状态中文" width="120"></el-table-column>
          <el-table-column prop="annualTargetRevenue" label="年度目标营收（万元）" width="120"></el-table-column>
          <el-table-column prop="longitude" label="经度" width="120"></el-table-column>
          <el-table-column prop="dimension" label="纬度" width="120"></el-table-column>
        </template>
        <el-table-column prop="roadSection" label="所属路段" width="125"></el-table-column>
        <el-table-column prop="actualPersonInCharge" label="实际负责人" width="100"></el-table-column>
        <el-table-column prop="organizationCode" label="组织机构代码" width="115"></el-table-column>
        <el-table-column prop="serviceAreaClassification" label="服务区分类" width="100"></el-table-column>
        <el-table-column prop="serviceAreaClassificationLabel" label="服务区分类中文" width="115"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="115"></el-table-column>
        <el-table-column prop="faxNumber" label="传真号码" width="120"></el-table-column>
        <el-table-column prop="dutyTelephone" label="值班电话" width="115"></el-table-column>
        <el-table-column prop="postalCode" label="邮政编码"></el-table-column>
      </template>
      <!-- 服务区分区设施 -->
      <template v-if="dataInfoId === '7'">
        <template v-if="tableType === '0'">
          <el-table-column prop="serviceAreaPartitionId" label="服务区分区ID"  width="100"></el-table-column>
          <el-table-column prop="did" label="业务主键" width="155"></el-table-column>
          <el-table-column prop="companyId" label="一级公司" width="115"></el-table-column>
          <el-table-column prop="companyLabel" label="一级公司名称" width="100"></el-table-column>
          <el-table-column prop="deptId" label="二级部门" width="115"></el-table-column>
          <el-table-column prop="deptLabel" label="二级部门名称" width="100"></el-table-column>
          <el-table-column prop="createId" label="创建人ID"></el-table-column>
          <el-table-column prop="createName" label="创建人姓名"  width="90"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="115"></el-table-column>
          <el-table-column prop="checkTime" label="审批通过" width="115"></el-table-column>
          <el-table-column prop="serviceAreaPartitionName" label="服务区分区名称"   width="125"></el-table-column>
          <el-table-column prop="serviceAreaName" label="服务区名称" width="95"></el-table-column>
          <el-table-column prop="geographicalDivision" label="地理分区"></el-table-column>
          <el-table-column prop="geographicalDivisionLabel" label="地理分区_中文" width="120"></el-table-column>
          <el-table-column prop="rowDirection" label="行车方向"></el-table-column>
          <el-table-column prop="upDown" label="上/下行"></el-table-column>
          <el-table-column prop="upDownLabel" label="上/下行_中文" width="120"></el-table-column>
          <el-table-column prop="longitude" label="经度" width="120"></el-table-column>
          <el-table-column prop="latitude" label="纬度" width="120"></el-table-column>
          <el-table-column prop="actualLandUseInServiceArea" label="服务区实际用地（亩)" width="120"></el-table-column>
          <el-table-column prop="operatingArea" label="综合楼内经营面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="parkingArea" label="停车场面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="builtupArea" label="建筑面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="quotientExcessArea" label="商超面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="afforestedArea" label="绿化面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="staffDormitoryArea" label="员工宿舍面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="cateringArea" label="最大餐厅面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="areaOfCementPlateAndAsphaltPavement" label="水泥板块及沥青路面面积（平方米）" width="150"></el-table-column>
          <el-table-column prop="publicToiletArea" label="公共卫生间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="areaOfMensToilet" label="男卫生间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="areaOfWomensToilet" label="女卫生间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="numberOfUrinalsInMensToilet" label="男卫小便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfStallsInMensToilet" label="男卫厕位隔间数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfMaleToiletSeats" label="男卫坐便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="isThereAToolRoomInTheMensBathroom" label="男卫是否有工具间" width="120"></el-table-column>
          <el-table-column prop="isThereAToolRoomInTheMensBathroomLabel" label="男卫是否有工具间_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfMaleSquattingSeats" label="男卫蹲便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="areaOfMensBathroomToolRoom" label="男卫工具间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="numberOfFemaleToiletSeats" label="女卫坐便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="doesTheWomensBathroomHaveAToolRoom" label="女卫是否有工具间" width="120"></el-table-column>
          <el-table-column prop="doesTheWomensBathroomHaveAToolRoomLabel" label="女卫是否有工具间_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfFemaleSquattingSeats" label="女卫蹲便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="areaOfWomensBathroomToolRoom" label="女卫工具间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="numberOfCubiclesInWomensToilet" label="女卫厕位隔间数量（个）" width="120"></el-table-column>
          <el-table-column prop="isThereASink" label="是否有洗手池" width="120"></el-table-column>
          <el-table-column prop="isThereASinkLabel" label="是否有洗手池_中文" width="120"></el-table-column>
          <el-table-column prop="isTheWashBasinSharedByMenAndWomen" label="洗手池是否男女共用" width="120"></el-table-column>
          <el-table-column prop="isTheWashBasinSharedByMenAndWomenLabel" label="洗手池是否男女共用_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfWashBasins" label="洗手池数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfWashBasinsInMensToilet" label="男卫洗手池数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfWashBasinsInWomensToilets" label="女卫洗手池数量（个）" width="120"></el-table-column>
          <el-table-column prop="isThereABoilingWaterRoom" label="是否有开水间" width="120"></el-table-column>
          <el-table-column prop="isThereABoilingWaterRoomLabel" label="是否有开水间_中文" width="120"></el-table-column>
          <el-table-column prop="areaOfBoilingWaterRoom" label="开水间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="numberOfBoilingWaterRooms" label="开水间数量" width="120"></el-table-column>
          <el-table-column prop="numberOfTapsInBoilingWaterRoom" label="开水间水龙头数量" width="120"></el-table-column>
          <el-table-column prop="isThereALaundry" label="是否有洗衣房" width="120"></el-table-column>
          <el-table-column prop="isThereALaundryLabel" label="是否有洗衣房_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfMonitoringRooms11" label="洗衣房数量" width="120"></el-table-column>
          <el-table-column prop="numberOfWashingMachines1" label="洗衣机数量" width="120"></el-table-column>
          <el-table-column prop="isThereAShowerRoom" label="是否有淋浴房" width="120"></el-table-column>
          <el-table-column prop="isThereAShowerRoomLabel" label="是否有淋浴房_中文" width="120"></el-table-column>
          <el-table-column prop="areaOfMensShowerRoom" label="男淋浴房面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="numberOfShowersInMensShowerRoom" label="男淋浴房花洒数量" width="120"></el-table-column>
          <el-table-column prop="areaOfWomensShowerRoom" label="女淋浴房面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="numberOfFemaleShowerRooms" label="女淋浴房数量" width="120"></el-table-column>
          <el-table-column prop="numberOfMaleShowerRooms" label="男淋浴房数量" width="120"></el-table-column>
          <el-table-column prop="numberOfShowersInWomensShowerRoom" label="女淋浴房花洒数量" width="120"></el-table-column>
          <el-table-column prop="isThereAMotherAndBabyRoom" label="是否有母婴室" width="120"></el-table-column>
          <el-table-column prop="isThereAMotherAndBabyRoomLabel" label="是否有母婴室_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfMotherAndBabyRooms" label="母婴室数量" width="120"></el-table-column>
          <el-table-column prop="areaOfMotherAndBabyRoom" label="母婴室面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="isThereASecondBathroom" label="是否有第二卫生间" width="120"></el-table-column>
          <el-table-column prop="isThereASecondBathroomLabel" label="是否有第二卫生间_中文" width="120"></el-table-column>
          <el-table-column prop="areaOfSecondToilet" label="第二卫生间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="areaOfTheSecondMensToilet" label="第二男卫生间面积（平方米" width="120"></el-table-column>
          <el-table-column prop="areaOfTheSecondWomensToilet" label="第二女卫生间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="numberOfUrinalsInTheSecondMensToilet" label="第二男卫生间小便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfCompartmentsInTheSecondMensToilet" label="第二男卫厕位隔间数量（个）" width="120"></el-table-column>
          <el-table-column prop="areaOfTheSecondMensBathroomToolRoom" label="第二男卫工具间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="numberOfToiletSeatsForTheSecondMensBathroom" label="第二男卫坐便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfSecondMensWashBasins" label="第二男卫洗手池数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfSquattingSeatsForTheSecondMensBathroom" label="第二男卫蹲便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="isThereAToolRoomForTheSecondMensBathroom" label="第二男卫是否有工具间" width="120"></el-table-column>
          <el-table-column prop="isThereAToolRoomForTheSecondMensBathroomLabel" label="第二男卫是否有工具间_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfToiletSeatsForTheSecondFemaleBathroom" label="第二女卫坐便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfSecondWomensToiletBasins" label="第二女卫洗手池数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfSquattingSeatsForTheSecondFemaleBathroom" label="第二女卫蹲便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="doesTheSecondFemaleBathroomHaveAToolRoom" label="第二女卫是否有工具间" width="120"></el-table-column>
          <el-table-column prop="doesTheSecondFemaleBathroomHaveAToolRoomLabel" label="第二女卫是否有工具间_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfCompartmentsInTheSecondWomensToilet" label="第二女卫厕位隔间数量（个）" width="120"></el-table-column>
          <el-table-column prop="areaOfTheSecondWomensBathroomToolRoom" label="第二女卫工具间面积（平方米" width="120"></el-table-column>
          <el-table-column prop="isThereASinkInTheSecondBathroom" label="第二卫生间是否有洗手池" width="120"></el-table-column>
          <el-table-column prop="isThereASinkInTheSecondBathroomLabel" label="第二卫生间是否有洗手池_中文" width="120"></el-table-column>
          <el-table-column prop="isTheWashBasinSharedByMenAndWomen1" label="第二卫生间洗手池是否男女共用" width="120"></el-table-column>
          <el-table-column prop="isTheWashBasinSharedByMenAndWomen1Label" label="第二卫生间洗手池是否男女共用_中文" width="150"></el-table-column>
          <el-table-column prop="numberOfWashBasins1" label="第二卫生间洗手池数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfWashBasinsInMensToilet1" label="第二男卫洗手池数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfWashBasinsInWomensToilets1" label="第二女卫洗手池数量（个）" width="120"></el-table-column>
          <el-table-column prop="isThereAThirdBathroom" label="是否有第三卫生间" width="120"></el-table-column>
          <el-table-column prop="isThereAThirdBathroomLabel" label="是否有第三卫生间_中文" width="120"></el-table-column>
          <el-table-column prop="thirdToiletArea" label="第三卫生间面积（平方米）" width="120"></el-table-column>
          <el-table-column prop="isThereAnEmergencyButton" label="是否有紧急按钮" width="120"></el-table-column>
          <el-table-column prop="isThereAnEmergencyButtonLabel" label="是否有紧急按钮_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfThirdToilet" label="第三卫生间数量（个）" width="120"></el-table-column>
          <el-table-column prop="isThereASafetyHandrail" label="是否有安全扶手" width="120"></el-table-column>
          <el-table-column prop="isThereASafetyHandrailLabel" label="是否有安全扶手_中文" width="120"></el-table-column>
          <el-table-column prop="numberOfToiletSeatsInTheThirdToilet" label="第三卫生间坐便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfUrinalsInTheThirdToilet" label="第三卫生间小便位数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfSmallParkingSpaces" label="小客车位数量（个）" width="120"></el-table-column>
          <el-table-column prop="extraLongNumberOfVehicles" label="超长车位数（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfPassengerSeats" label="中大客车位数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfAccessibleVehicles" label="无障碍车位数（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfTruckSpaces" label="货车位数量（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfWomensCars" label="女士车位数（个）" width="120"></el-table-column>
          <el-table-column prop="numberOfParkingSpacesForHazardousChemicals" label="危化品车位数量（个" width="120"></el-table-column>
          <el-table-column prop="numberOfLivestockVehicles" label="畜产车车位数（个）" width="120"></el-table-column>
          <el-table-column prop="isThereAOilStation" label="是否有加油站" width="120"></el-table-column>
          <el-table-column prop="isThereAOilStationLabel" label="是否有加油站_中文" width="120"></el-table-column>
          <el-table-column prop="nameOfOilStationOperator" label="加油站运营商名称" width="125"></el-table-column>
          <el-table-column prop="nameOfOilStationOperatorLabel" label="加油站运营商名称_中文" width="215"></el-table-column>
          <el-table-column prop="pleaseEnterTheNameOfTheGasStationOperator" label="请输入加油站运营商名称" width="175"></el-table-column>
          <el-table-column prop="gasStationArea" label="加油站面积（平方米）" width="125"></el-table-column>
          <el-table-column prop="numberOfRefuelingGuns" label="加油枪数量（把）" width="125"></el-table-column>
          <el-table-column prop="isThereAGasStation" label="是否有加气站" width="125"></el-table-column>
          <el-table-column prop="isThereAGasStationLabel" label="是否有加气站_中文" width="125"></el-table-column>
          <el-table-column prop="nameOfGasStationOperator" label="加气站运营商名称" width="125"></el-table-column>
          <el-table-column prop="areaOfGasStation" label="加气站面积（平方米）" width="125"></el-table-column>
          <el-table-column prop="isThereAChargingStation" label="是否有充电站" width="125"></el-table-column>
          <el-table-column prop="isThereAChargingStationLabel" label="是否有充电站_中文" width="125"></el-table-column>
          <el-table-column prop="nameOfChargingStationOperator" label="充电站运营商名称" width="215"></el-table-column>
          <el-table-column prop="numberOfChargingVehicles" label="充电车位数（个）" width="125"></el-table-column>
          <el-table-column prop="areaOfChargingPile" label="充电桩面积（平方米）" width="125"></el-table-column>
          <el-table-column prop="numberOfChargingGuns" label="充电枪数（把）" width="125"></el-table-column>
          <el-table-column prop="numberOfChargingPiles" label="充电桩个数（个）" width="125"></el-table-column>
          <el-table-column prop="isThereAReplacementStation" label="是否有换电站" width="125"></el-table-column>
          <el-table-column prop="isThereAReplacementStationLabel" label="是否有换电站_中文" width="125"></el-table-column>
          <el-table-column prop="nameOfSwitchingStationOperator" label="换点站运营商名称" width="125"></el-table-column>
          <el-table-column prop="areaOfExchangeStation" label="换电站面积（平方米）" width="125"></el-table-column>
          <el-table-column prop="hasANewRoundOfPropertyHandoverBeenCompleted" label="是否完成新一轮物业交接工作" width="145"></el-table-column>
          <el-table-column prop="hasANewRoundOfPropertyHandoverBeenCompletedLabel" label="是否完成新一轮物业交接工作_中文" width="145"></el-table-column>
          <el-table-column prop="numberOfSecurityPersonnel1" label="保安人员数" width="105"></el-table-column>
          <el-table-column prop="numberOfGreenChemicalWorkers" label="绿化工人数" width="105"></el-table-column>
          <el-table-column prop="longWorkingHoursForSecurityPersonnel" label="保安人员用工时长" width="105"></el-table-column>
          <el-table-column prop="longWorkingHoursForGreeningWorkers" label="绿化工人用工时长" width="105"></el-table-column>
          <el-table-column prop="numberOfCleaningPersonnel1" label="保洁人员数" width="105"></el-table-column>
          <el-table-column prop="longManHoursForCleaningPersonnel" label="保洁人员用工时长" width="105"></el-table-column>
          <el-table-column prop="numberOfSecurityPersonnel" label="保安人员数" width="105"></el-table-column>
          <el-table-column prop="numberOfCleaningPersonnel" label="保洁人员数" width="105"></el-table-column>
          <el-table-column prop="isThereADriversHome" label="是否有司机之家" width="125"></el-table-column>
          <el-table-column prop="isThereADriversHomeLabel" label="是否有司机之家_中文" width="125"></el-table-column>
          <el-table-column prop="driversHomeArea" label="司机之家面积（平方米）" width="125"></el-table-column>
          <el-table-column prop="driversHomeRating" label="司机之家等级" width="125"></el-table-column>
          <el-table-column prop="driversHomeRatingLabel" label="司机之家等级_中文" width="125"></el-table-column>
          <el-table-column prop="isThereARvCamp1" label="是否有房车营地" width="125"></el-table-column>
          <el-table-column prop="isThereARvCamp1Label" label="是否有房车营地_中文" width="125"></el-table-column>
          <el-table-column prop="autoRepairArea" label="车辆维修点面积（平方米）" width="125"></el-table-column>
          <el-table-column prop="areThereAnyMedicalServices" label="是否有医疗服务" width="125"></el-table-column>
          <el-table-column prop="areThereAnyMedicalServicesLabel" label="是否有医疗服务_中文" width="125"></el-table-column>
          <el-table-column prop="isThereABarrierFreeAccess" label="是否有无障碍通道" width="125"></el-table-column>
          <el-table-column prop="isThereABarrierFreeAccessLabel" label="是否有无障碍通道_中文" width="125"></el-table-column>
          <el-table-column prop="isThereAVehicleMaintenancePoint" label="是否有车辆维修点" width="125"></el-table-column>
          <el-table-column prop="isThereAVehicleMaintenancePointLabel" label="是否有车辆维修点_中文" width="125"></el-table-column>
          <el-table-column prop="numberOfOfficeRooms" label="办公用房房间数（间）" width="125"></el-table-column>
          <el-table-column prop="numberOfMonitoringRooms" label="监控室数量（间）" width="125"></el-table-column>
          <el-table-column prop="fieldMonitoringQuantity" label="外场监控数量（个）" width="125"></el-table-column>
          <el-table-column prop="numberOfInfieldMonitoring" label="内场监控数量（个）" width="125"></el-table-column>
          <el-table-column prop="numberOfHighPoleLamps" label="高杆灯数量（个）" width="125"></el-table-column>
          <el-table-column prop="sewageTreatmentMode" label="污水处理方式" width="125"></el-table-column>
          <el-table-column prop="sewageTreatmentModeLabel" label="污水处理方式_中文" width="125"></el-table-column>
          <el-table-column prop="pleaseFillInTheSewageTreatmentMethod" label="请填写污水处理方式" width="155"></el-table-column>
          <el-table-column prop="numberOfDistributionRooms" label="配电房数量（间）" width="125"></el-table-column>
          <el-table-column prop="generatorModel" label="发电机品牌及型号" width="125"></el-table-column>
          <el-table-column prop="distributionRoomArea" label="配电房面积（平方米）" width="125"></el-table-column>
          <el-table-column prop="powerCapacityOfServiceArea" label="服务区电力容量" width="125"></el-table-column>
          <el-table-column prop="generatorPower" label="发电机功率（千瓦）" width="125"></el-table-column>
          <el-table-column prop="facadePhotos" label="外立面照片"></el-table-column>
          <el-table-column prop="businessLayout" label="业态布局图"></el-table-column>
          <el-table-column prop="infieldPhotos" label="内场照片"></el-table-column>
          <el-table-column prop="interfaceDate" label="接口获取日期" width="125"></el-table-column>
        </template>
        <template v-else>
          <el-table-column prop="serviceAreaId" label="服务区ID" width="125"></el-table-column>
          <el-table-column prop="serviceAreaName" label="服务区名称" width="125"></el-table-column>
          <el-table-column prop="regionCode" label="所属区域编码" width="125"></el-table-column>
          <el-table-column prop="regionName" label="所属区域"></el-table-column>
          <el-table-column prop="roadSection" label="所属路段"></el-table-column>
          <el-table-column prop="serviceAreaClassification" label="服务区分类" width="125"></el-table-column>
          <el-table-column prop="serviceAreaClassificationLabel" label="服务区分类中文名" width="125"></el-table-column>
          <el-table-column prop="organizationCode" label="组织机构代码" width="125"></el-table-column>
          <el-table-column prop="businessLicensePersonInCharge" label="实际负责人" width="125"></el-table-column>
          <el-table-column prop="businessLicenseRegisteredName" label="营业执照登记名称" width="155"></el-table-column>
          <el-table-column prop="businessLicenseIssueDate" label="营业执照核发日期" width="155"></el-table-column>
          <el-table-column prop="businessLicenseNatureOfBusiness" label="执照登记经营范围" width="155"></el-table-column>
          <el-table-column prop="partitionUplinkDownlink" label="服务区分区概况上下行" width="155"></el-table-column>
          <el-table-column prop="geographicalPosition" label="地理位置" width="175"></el-table-column>
          <el-table-column prop="geographicalDivision" label="地理分区"></el-table-column>
          <el-table-column prop="dutyTelephone" label="值班电话" width="125"></el-table-column>
          <el-table-column prop="postalCode" label="邮政编码"></el-table-column>
          <el-table-column prop="faxNumber" label="传真号码" width="125"></el-table-column>
          <el-table-column prop="openingTime" label="开业时间"></el-table-column>
          <el-table-column prop="actualLandArea" label="服务区实际用地" width="125"></el-table-column>
          <el-table-column prop="builtUpArea" label="建筑面积"></el-table-column>
          <el-table-column prop="operatingArea" label="经营面积"></el-table-column>
          <el-table-column prop="cementPlateAsphaltPavementArea" label="水泥板块及沥青路面面积" width="165"></el-table-column>
          <el-table-column prop="afforestedArea" label="绿化面积"></el-table-column>
          <el-table-column prop="numberSmallParkingSpaces" label="小车位数量" width="125"></el-table-column>
          <el-table-column prop="numberPassengerSeats" label="客车位数量" width="125"></el-table-column>
          <el-table-column prop="numberTruckSpaces" label="货车位数量" width="125"></el-table-column>
          <el-table-column prop="numberParkingSpacesHazardousChemicals" label="危化品车位数量" width="125"></el-table-column>
          <el-table-column prop="publicToiletArea" label="公共卫生间面积(平方米)" width="125"></el-table-column>
          <el-table-column prop="areaOfMensToilet" label="男卫生间面积(平方米)" width="125"></el-table-column>
          <el-table-column prop="numberUrinalsInMensToilet" label="男卫生间小便位数量(个)" width="125"></el-table-column>
          <el-table-column prop="numberBigMensToilet" label="男卫生间大便位数量(个)" width="125"></el-table-column>
          <el-table-column prop="numberFaucetsInMensToilet" label="男卫生间洗手位数量(个)" width="125"></el-table-column>
          <el-table-column prop="areaOfWomensToilet" label="女卫生间面积(平方米)" width="125"></el-table-column>
          <el-table-column prop="numberSeatsWomensToilet" label="女卫生间大便位数量(个)" width="125"></el-table-column>
          <el-table-column prop="numberFaucetsInWomensToilet" label="女卫生间洗手位数量(个)" width="125"></el-table-column>
          <el-table-column prop="numberSecurityGuards" label="保安人员数" width="125"></el-table-column>
          <el-table-column prop="cleaningNumber" label="保洁人员数" width="125"></el-table-column>
          <el-table-column prop="serviceAreaStatus" label="服务区状态" width="125"></el-table-column>
          <el-table-column prop="serviceAreaStatusLabel" label="服务区状态中文" width="125"></el-table-column>
          <el-table-column prop="annualTargetRevenue" label="年度目标营收" width="125"></el-table-column>
          <el-table-column prop="longitude" label="经度" width="125"></el-table-column>
          <el-table-column prop="dimension" label="纬度" width="125"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="100"></el-table-column>
        </template>
      </template>
      <!-- 服务区铺位信息 -->
      <template v-if="dataInfoId === '8'">
        <el-table-column prop="berthId" label="铺位业务ID" width="100"></el-table-column>
        <template v-if="tableType === '0'">
          <el-table-column prop="did" label="业务主键" width="175"></el-table-column>
          <el-table-column prop="companyId" label="一级公司" width="125"></el-table-column>
          <el-table-column prop="companyLabel" label="一级公司名称" width="100"></el-table-column>
          <el-table-column prop="deptId" label="二级部门" width="125"></el-table-column>
          <el-table-column prop="deptLabel" label="二级部门名称" width="100"></el-table-column>
          <el-table-column prop="createId" label="创建人ID" width="125"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="125"></el-table-column>
          <el-table-column prop="createName" label="创建人姓名" width="125"></el-table-column>
          <el-table-column prop="checkTime" label="审批通过" width="125"></el-table-column>
          <el-table-column prop="serviceAreaName" label="服务分区名称" width="125"></el-table-column>
          <el-table-column prop="serviceAreaNameLabel" label="服务分区名称_中文" width="125"></el-table-column>
          <el-table-column prop="berthStatus" label="铺位状态"></el-table-column>
          <el-table-column prop="berthStatusLabel" label="铺位状态_中文" width="125"></el-table-column>
          <el-table-column prop="berthWidth" label="铺位深度（米）" width="125"></el-table-column>
          <el-table-column prop="isTheSmokeExhaustSystemAccessible" label="是否可接入排烟系统" width="125"></el-table-column>
          <el-table-column prop="isTheSmokeExhaustSystemAccessibleLabel" label="是否可接入排烟系统_中文" width="125"></el-table-column>
          <el-table-column prop="floorNumber" label="楼层"></el-table-column>
          <el-table-column prop="berthArea" label="铺位面积（平方米）" width="125"></el-table-column>
          <el-table-column prop="whetherThereIsWaterSupplyAndDrainage" label="是否具备上下水" width="125"></el-table-column>
          <el-table-column prop="isItConnectedToTheOilSeparator" label="是否具备上下水_中文" width="125"></el-table-column>
          <el-table-column prop="isItConnectedToTheOilSeparator" label="是否接入隔油池" width="125"></el-table-column>
          <el-table-column prop="isItConnectedToTheOilSeparatorLabel" label="是否接入隔油池_中文" width="125"></el-table-column>
          <el-table-column prop="berthCode" label="铺位代码" width="125"></el-table-column>
          <el-table-column prop="berthLength" label="展面宽度" width="125"></el-table-column>
          <el-table-column prop="powerRequirements" label="电力要求(kw)" width="125"></el-table-column>
          <el-table-column prop="currentMerchantCompany" label="当前商户公司" width="125"></el-table-column>
          <el-table-column prop="currentMerchantCompanyLabel" label="当前商户公司_中文" width="125"></el-table-column>
          <el-table-column prop="formatRestrictions" label="禁止业态"></el-table-column>
          <el-table-column prop="currentSettledBrands" label="当前入驻品牌" width="125"></el-table-column>
          <el-table-column prop="currentSettledBrandsLabel" label="当前入驻品牌_中文" width="125"></el-table-column>
          <el-table-column prop="interfaceDate" label="接口获取日期" width="125"></el-table-column>
        </template>
        <template v-else>
          <el-table-column prop="serviceAreaId" label="服务区id" width="125"></el-table-column>
          <el-table-column prop="bunkArea" label="铺位面积(平方米)" width="125"></el-table-column>
          <el-table-column prop="bunkLength" label="铺位长度(米)" width="125"></el-table-column>
          <el-table-column prop="bunkWidth" label="铺位宽度(米)" width="125"></el-table-column>
          <el-table-column prop="bunkZoning" label="铺位分区(东西南北区)" width="125"></el-table-column>
          <el-table-column prop="berthStatus" label="铺位状态"></el-table-column>
          <el-table-column prop="berthStatusLabel" label="铺位状态_中文" width="125"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="100"></el-table-column>
        </template>
      </template>
      <!-- 合同填报信息 -->
      <template v-if="dataInfoId === '9'">
        <template v-if="tableType === '0'">
          <el-table-column prop="did" label="业务主键" width="175"></el-table-column>
          <el-table-column prop="companyId" label="一级公司" width="125"></el-table-column>
          <el-table-column prop="companyLabel" label="一级公司名称" width="140"></el-table-column>
          <el-table-column prop="deptId" label="二级部门" width="125"></el-table-column>
          <el-table-column prop="deptLabel" label="二级部门名称" width="100"></el-table-column>
          <el-table-column prop="createId" label="创建人ID" width="125"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="100"></el-table-column>
          <el-table-column prop="createName" label="创建人姓名" width="125"></el-table-column>
          <el-table-column prop="checkTime" label="审批通过" width="125"></el-table-column>
          <el-table-column prop="serviceAreaName" label="服务区名称" width="95"></el-table-column>
          <el-table-column prop="contractNo" label="合同编号" width="125"></el-table-column>
          <el-table-column prop="contractNoLabel" label="合同编号_中文" width="125"></el-table-column>
          <el-table-column prop="contractStatus" label="合同状态" width="145"></el-table-column>
          <el-table-column prop="contractStatusLabel" label="合同状态_中文" width="145"></el-table-column>
          <el-table-column prop="contractName" label="合同名称" width="195"></el-table-column>
          <el-table-column prop="signingProcedure" label="签订程序" width="125"></el-table-column>
          <el-table-column prop="signingProcedureLabel" label="签订程序_中文" width="125"></el-table-column>
          <el-table-column prop="projectType" label="业态" width="145"></el-table-column>
          <el-table-column prop="nameOfPartyA" label="我方名称" width="235"></el-table-column>
          <el-table-column prop="nameOfPartyALabel" label="我方名称_中文" width="235"></el-table-column>
          <el-table-column prop="ourContactNumber" label="我方联系电话" width="125"></el-table-column>
          <el-table-column prop="ourCompanyRegisteredAddress" label="我方注册地址" width="155"></el-table-column>
          <el-table-column prop="contactPersonOfPartyA" label="我方联系人" width="125"></el-table-column>
          <el-table-column prop="nameOfPartyB" label="对方名称" width="195"></el-table-column>
          <el-table-column prop="nameOfPartyBLabel" label="对方名称_中文" width="195"></el-table-column>
          <el-table-column prop="contactNumberOfTheOtherParty" label="对方联系电话" width="125"></el-table-column>
          <el-table-column prop="registeredAddressOfPartyB" label="对方注册地址" width="155"></el-table-column>
          <el-table-column prop="contactPersonOfPartyB" label="对方联系人" width="125"></el-table-column>
          <el-table-column prop="nameOfPartyC" label="对方名称（丙）" width="125"></el-table-column>
          <el-table-column prop="nameOfPartyCLabel" label="对方名称（丙）_中文" width="125"></el-table-column>
          <el-table-column prop="contactNumberOfPartyC" label="丙方联系电话（丙）" width="125"></el-table-column>
          <el-table-column prop="registeredAddressOfPartyC" label="对方（丙）注册地址" width="125"></el-table-column>
          <el-table-column prop="contactPersonOfPartyC" label="对方联系人（丙）" width="125"></el-table-column>
          <el-table-column prop="contractStartTime" label="合同开始时间" width="125"></el-table-column>
          <el-table-column prop="storeDecorationStartTime" label="门店开始装修时间" width="125"></el-table-column>
          <el-table-column prop="contractEndTime" label="合同结束时间" width="125"></el-table-column>
          <el-table-column prop="storeFinishDecorationTime" label="门店结束装修时间" width="125"></el-table-column>
          <el-table-column prop="isThereADecorationPeriod" label="是否有装修期" width="125"></el-table-column>
          <el-table-column prop="isThereADecorationPeriodLabel" label="是否有装修期_中文" width="135"></el-table-column>
          <el-table-column prop="accountingType" label="核算类型" width="125"></el-table-column>
          <el-table-column prop="accountingTypeLabel" label="核算类型_中文" width="155"></el-table-column>
          <el-table-column prop="settlementMode" label="结算模式" width="125"></el-table-column>
          <el-table-column prop="settlementModeLabel" label="结算模式_中文" width="125"></el-table-column>
          <el-table-column prop="rentPaymentMode" label="租金支付周期" width="125"></el-table-column>
          <el-table-column prop="rentPaymentModeLabel" label="租金支付周期_中文" width="125"></el-table-column>
          <el-table-column prop="firstYearFixedOperationAndManagementFee" label="第1年固定经营管理费" width="125"></el-table-column>
          <el-table-column prop="fixedOperationAndManagementFeeInTheSecondYear" label="第2年固定经营管理费" width="125"></el-table-column>
          <el-table-column prop="fixedOperationAndManagementFeeInTheThirdYear" label="第3年固定经营管理费" width="125"></el-table-column>
          <el-table-column prop="minimumOperatingAndManagementFeeForTheFirstYear" label="第1年保底经营管理费" width="125"></el-table-column>
          <el-table-column prop="minimumOperatingAndManagementFeeForTheSecondYear" label="第2年保底经营管理费" width="125"></el-table-column>
          <el-table-column prop="minimumOperatingAndManagementFeeForTheThirdYear" label="第3年保底经营管理费" width="125"></el-table-column>
          <el-table-column prop="whetherTheAccountingBaseIncludesTax" label="核算营业额时是否含税" width="125"></el-table-column>
          <el-table-column prop="whetherTheAccountingBaseIncludesTaxLabel" label="核算营业额时是否含税_中文" width="125"></el-table-column>
          <el-table-column prop="baseTurnoverInTheFirstYear" label="第1年基准营业额" width="125"></el-table-column>
          <el-table-column prop="baseTurnoverInTheSecondYear" label="第2年基准营业额" width="125"></el-table-column>
          <el-table-column prop="baseTurnoverInTheThirdYear" label="第3年基准营业额" width="125"></el-table-column>
          <el-table-column prop="benchmarkCommissionProportionInTheFirstYear" label="第1年基准提成比例" width="135"></el-table-column>
          <el-table-column prop="percentageOfCommissionInTheSecondYear" label="第2年基准提成比例" width="135"></el-table-column>
          <el-table-column prop="benchmarkCommissionProportionInTheThirdYear" label="第3年基准提成比例" width="135"></el-table-column>
          <el-table-column prop="proportionOfExcessCommissionInTheFirstYear" label="第1年超额提成比例" width="135"></el-table-column>
          <el-table-column prop="proportionOfExcessCommissionInTheSecondYear" label="第2年超额提成比例" width="135"></el-table-column>
          <el-table-column prop="percentageOfExcessCommissionInTheThirdYear" label="第3年超额提成比例" width="135"></el-table-column>
          <el-table-column prop="isThereAPerformanceSecurity" label="是否有履约保证金" width="125"></el-table-column>
          <el-table-column prop="isThereAPerformanceSecurityLabel" label="是否有履约保证金_中文" width="125"></el-table-column>
          <el-table-column prop="performanceBond" label="履约保证金" width="125"></el-table-column>
          <el-table-column prop="dateOfReceiptOfPerformanceBond" label="履约保证金到账日期" width="145"></el-table-column>
          <el-table-column prop="isThereAnyHouseRentalFee" label="是否有房屋租赁费" width="125"></el-table-column>
          <el-table-column prop="isThereAnyHouseRentalFeeLabel" label="是否有房屋租赁费_中文" width="125"></el-table-column>
          <el-table-column prop="houseRentalFee" label="房屋租赁费" width="125"></el-table-column>
          <el-table-column prop="houseRentalFeeArrivalDate" label="房屋租赁费到账日期" width="145"></el-table-column>
          <el-table-column prop="notesToCoreElements" label="核心要素备注" width="125"></el-table-column>
          <el-table-column prop="brandManagement" label="经营品牌" width="125"></el-table-column>
          <el-table-column prop="berthId" label="铺位ID" width="155"></el-table-column>
          <el-table-column prop="berthIdLabel" label="铺位ID_中文" width="155"></el-table-column>
          <el-table-column prop="serviceAreaPartitionName" label="铺位所在服务分区名称" width="155"></el-table-column>
          <el-table-column prop="serviceAreaPartitionNameLabel" label="铺位所在服务分区名称_中文" width="155"></el-table-column>
          <el-table-column prop="berthCode" label="铺位代码" width="125"></el-table-column>
          <el-table-column prop="berthCodeLabel" label="铺位代码_中文" width="125"></el-table-column>
          <el-table-column prop="natureOfBusiness" label="经营范围" width="395"></el-table-column>
          <el-table-column prop="chargeForWater" label="水费" width="125"></el-table-column>
          <el-table-column prop="otherExpenses" label="其他费用" width="125"></el-table-column>
          <el-table-column prop="electricityFees" label="电费" width="125"></el-table-column>
          <el-table-column prop="contractText" label="合同文本" width="155"></el-table-column>
          <el-table-column prop="enclosure" label="附件" width="155"></el-table-column>
          <el-table-column prop="contractConsiderations" label="其他备注" width="125"></el-table-column>
          <el-table-column prop="interfaceDate" label="接口获取日期" width="100"></el-table-column>

        </template>
        <template v-else>
          <el-table-column prop="serviceAreaId" label="服务区ID" width="125"></el-table-column>
          <el-table-column prop="brandMerchantNo" label="品牌商户编号" width="125"></el-table-column>
          <el-table-column prop="contractId" label="合同主键" width="125"></el-table-column>
          <el-table-column prop="accountingType" label="核算类型" width="125"></el-table-column>
          <el-table-column prop="accountingTypeLabel" label="核算类型_中文" width="125"></el-table-column>
          <el-table-column prop="serverpartName" label="服务区名称" width="95"></el-table-column>
          <el-table-column prop="contractName" label="合同名称" width="145"></el-table-column>
          <el-table-column prop="contractCode" label="合同编码" width="125"></el-table-column>
          <el-table-column prop="partya" label="甲方" width="205"></el-table-column>
          <el-table-column prop="partyb" label="乙方" width="205"></el-table-column>
          <el-table-column prop="contractAmt" label="合同金额" width="125"></el-table-column>
          <el-table-column prop="startTime" label="合同开始时间" width="125"></el-table-column>
          <el-table-column prop="endTime" label="合同结束时间" width="125"></el-table-column>
          <el-table-column prop="contractType" label="合同类型" width="125"></el-table-column>
          <el-table-column prop="performanceBond" label="签订程序" width="125"></el-table-column>
          <el-table-column prop="performanceBond" label="履约保证金" width="125"></el-table-column>
          <el-table-column prop="securityRiskDeposit" label="安全风险抵押金" width="125"></el-table-column>
          <el-table-column prop="csaRate" label="提成比例" width="125"></el-table-column>
          <el-table-column prop="contractCsa" label="合同提成额" width="125"></el-table-column>
          <el-table-column prop="managementModel" label="经营模式" width="125"></el-table-column>
          <el-table-column prop="businessArea" label="经营面积" width="125"></el-table-column>
          <el-table-column prop="businessType" label="经营业态" width="125"></el-table-column>
          <el-table-column prop="businessTypeId" label="经营业态id" width="125"></el-table-column>
          <el-table-column prop="parentBusinessType" label="父级经营业态" width="125"></el-table-column>
          <el-table-column prop="parentBusinessTypeId" label="父级经营业态id" width="125"></el-table-column>
          <el-table-column prop="partyaContacts" label="甲方联系人" width="125"></el-table-column>
          <el-table-column prop="partyaContactUmber" label="甲方联系电话" width="125"></el-table-column>
          <el-table-column prop="partybContacts" label="乙方联系人" width="125"></el-table-column>
          <el-table-column prop="partybContactUmber" label="乙方联系电话" width="125"></el-table-column>
          <el-table-column prop="partyc" label="丙方" width="125"></el-table-column>
          <el-table-column prop="partycContacts" label="丙方联系人" width="125"></el-table-column>
          <el-table-column prop="partycContactUmber" label="丙方联系电话" width="125"></el-table-column>
          <el-table-column prop="brand" label="品牌" width="125"></el-table-column>
          <el-table-column prop="baseTurnoverIncludingTax" label="含税基准营业额" width="125"></el-table-column>
          <el-table-column prop="dueDate" label="应到账日期" width="125"></el-table-column>
          <el-table-column prop="contractPeriodYear" label="合同期限(年)" width="125"></el-table-column>
          <el-table-column prop="contractPeriodDay" label="合同期限(天)" width="125"></el-table-column>
          <el-table-column prop="dateReceiptOfPerformanceBond" label="履约保证金到账日期" width="145"></el-table-column>
          <el-table-column prop="refundDateOfPerformanceSecurity" label="履约保证金退款日期" width="145"></el-table-column>
          <el-table-column prop="houseRentalFee" label="房屋租赁费(总计)" width="125"></el-table-column>
          <el-table-column prop="houseRentalFeeArrivalDate" label="房屋租赁费到账日期" width="145"></el-table-column>
          <el-table-column prop="houseRentalFeeRefundDate" label="房屋租赁费退款日期" width="145"></el-table-column>
          <el-table-column prop="settlementMode" label="结算模式" width="125"></el-table-column>
          <el-table-column prop="storeDecorationStartTime" label="门店装修期开始时间" width="145"></el-table-column>
          <el-table-column prop="storeDecorationEndTime" label="门店装修期结束时间" width="155"></el-table-column>
          <el-table-column prop="natureOfBusiness" label="经营范围" width="495"></el-table-column>
          <el-table-column prop="contractConsiderations" label="合同注意事项" width="125"></el-table-column>
          <el-table-column prop="chargeForWater" label="水费(元/吨)" width="125"></el-table-column>
          <el-table-column prop="electricityFees" label="电费(元/度)" width="125"></el-table-column>
          <el-table-column prop="otherExpenses" label="其他费用" width="125"></el-table-column>
          <el-table-column prop="handler" label="经办人" width="125"></el-table-column>
          <el-table-column prop="undertakingDepartment" label="承办部门" width="125"></el-table-column>
          <el-table-column prop="contractSuspensionTime" label="合同中止时间" width="125"></el-table-column>
        </template>
      </template>
      <!-- 商户管理 -->
      <template v-if="dataInfoId === '10'">
        <el-table-column prop="did" label="业务主键" width="175"></el-table-column>

        <template v-if="tableType === '0'">
          <el-table-column label="序号" type="index" width="55"></el-table-column>
          <el-table-column prop="autoId" label="编号"></el-table-column>
          <el-table-column prop="companyId" label="一级公司" width="125"></el-table-column>
          <el-table-column prop="companyLabel" label="一级公司名称" width="180"></el-table-column>
          <el-table-column prop="deptId" label="二级部门" width="125"></el-table-column>
          <el-table-column prop="deptLabel" label="二级部门名称" width="180"></el-table-column>
          <el-table-column prop="createId" label="创建人ID" width="125"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="100"></el-table-column>
          <el-table-column prop="createName" label="创建人姓名" width="125"></el-table-column>
          <el-table-column prop="checkTime" label="审批通过" width="125"></el-table-column>
          <el-table-column prop="registeredNameOfBusinessLicense" label="营业执照登记名称" width="126"></el-table-column>
          <el-table-column prop="registeredNameOfBusinessLicenseLabel" label="营业执照登记名称_中文" width="125"></el-table-column>
          <el-table-column prop="organizationCode" label="统一社会信用代码" width="125"></el-table-column>
          <el-table-column prop="organizationCodeLabel" label="统一社会信用代码（组织机构代码）_中文" width="185"></el-table-column>
          <el-table-column prop="companyRegisteredAddress" label="注册地址" width="125"></el-table-column>
          <el-table-column prop="merchantStatusLabel" label="商户状态_中文" width="125"></el-table-column>
          <el-table-column prop="merchantSource" label="商户来源" width="125"></el-table-column>
          <el-table-column prop="merchantSourceLabel" label="商户来源_中文" width="125"></el-table-column>
          <el-table-column prop="merchantStarLabel" label="商户星级_中文" width="125"></el-table-column>
          <el-table-column prop="contactNumber" label="联系电话" width="125"></el-table-column>
          <el-table-column prop="mailbox" label="邮箱" width="125"></el-table-column>
          <el-table-column prop="companyLogo" label="公司LOGO" width="125"></el-table-column>
          <el-table-column prop="invoiceHeaderLabel" label="发票抬头_中文" width="125"></el-table-column>
          <el-table-column prop="remarks" label="备注" width="125"></el-table-column>
        </template>
        <template v-else>
          <el-table-column prop="brandLibraryNo" label="品牌库编号" width="125"></el-table-column>
          <el-table-column prop="brandMerchantNo" label="品牌商户编号" width="125"></el-table-column>
          <el-table-column prop="merchantName" label="商户名称" width="195"></el-table-column>
          <el-table-column prop="customerSource" label="客户来源" width="125"></el-table-column>
          <el-table-column prop="detailedAddress" label="详细地址" width="225"></el-table-column>
        </template>
        <el-table-column prop="industryType" label="行业类型" width="125"></el-table-column>
        <el-table-column prop="merchantStar" label="商户星级" width="125"></el-table-column>
        <el-table-column prop="merchantStatus" label="商户状态" width="125"></el-table-column>
        <el-table-column prop="attributablePersonnel" label="归属人员" width="125"></el-table-column>
        <el-table-column prop="city" label="所在城市" width="125"></el-table-column>
        <el-table-column prop="contacts" label="联系人" width="125"></el-table-column>
        <el-table-column prop="phoneNumber" label="手机号码" width="125"></el-table-column>
        <el-table-column prop="wechat" label="微信" width="125"></el-table-column>
        <el-table-column prop="companyOfficeNumber" label="公司电话" width="125"></el-table-column>
        <el-table-column prop="companyWebsite" label="公司网址" width="125"></el-table-column>
        <el-table-column prop="currentPosition" label="当前职位" width="125"></el-table-column>
        <el-table-column prop="companyFax" label="公司传真" width="125"></el-table-column>
        <el-table-column prop="companyIntroduction" label="公司介绍" width="600"></el-table-column>
        <el-table-column prop="enterpriseTaxNumber" label="企业税号" width="125"></el-table-column>
        <el-table-column prop="bankOfDeposit" label="开户银行" width="205"></el-table-column>
        <el-table-column prop="invoiceHeader" label="发票抬头" width="125"></el-table-column>
        <el-table-column prop="bankAccount" label="银行账户" width="185"></el-table-column>
        <el-table-column prop="unitAddress" label="单位联系地址" width="225"></el-table-column>
        <el-table-column prop="bankAccount" label="银行账户" width="125"></el-table-column>
        <el-table-column prop="telephoneNumber" label="电话号码" width="125"></el-table-column>
        <el-table-column prop="interfaceDate" label="接口获取日期" width="125"></el-table-column>
      </template>
      <!-- 公司编码 -->
      <template v-if="dataInfoId === '11'">
        <el-table-column prop="autoId" label="编号" width="125"></el-table-column>
        <el-table-column prop="did" label="业务主键" width="195"></el-table-column>
        <el-table-column prop="companyId" label="一级公司" width="125"></el-table-column>
        <el-table-column prop="companyLabel" label="一级公司名称" width="170"></el-table-column>
        <el-table-column prop="deptId" label="二级部门" width="125"></el-table-column>
        <el-table-column prop="deptLabel" label="二级部门名称" width="180"></el-table-column>
        <el-table-column prop="createId" label="创建人ID" width="125"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="125"></el-table-column>
        <el-table-column prop="createName" label="创建人姓名" width="125"></el-table-column>
        <el-table-column prop="organizationCode" label="统一社会信用代码" width="125"></el-table-column>
        <el-table-column prop="registeredNameOfBusinessLicense" label="营业执照登记名称" width="126"></el-table-column>
        <el-table-column prop="companyRegisteredAddress" label="注册地址"></el-table-column>
        <el-table-column prop="legalRepresentative" label="法定代表人" width="125"></el-table-column>
        <el-table-column prop="currencyOfRegisteredCapital" label="注册资本币种" width="125"></el-table-column>
        <el-table-column prop="currencyOfRegisteredCapitalLabel" label="注册资本币种_中文" width="135"></el-table-column>
        <el-table-column prop="establishmentTime" label="成立时间"></el-table-column>
        <el-table-column prop="pleaseSpecifyTheCurrencyOfTheRegisteredCapital" label="请说明注册资本币种" width="145"></el-table-column>
        <el-table-column prop="registeredCapital" label="注册资本"></el-table-column>
        <el-table-column prop="scopeOfBusinessLicenseRegistration" label="营业执照登记范围" width="505"></el-table-column>
        <el-table-column prop="businessLicense" label="营业执照（上传可加快审核速度）" width="215"></el-table-column>
        <el-table-column prop="corporateIdCard" label="法人身份证" width="215"></el-table-column>
        <el-table-column prop="remarks" label="备注"></el-table-column>
        <el-table-column prop="interfaceDate" label="接口获取日期" width="105"></el-table-column>
      </template>
      <!-- 服务区业态 -->
      <template v-if="dataInfoId === '12'">
        <el-table-column prop="autoId" label="编号" width="125"></el-table-column>
        <el-table-column prop="did" label="业务主键" width="205"></el-table-column>
        <el-table-column prop="companyId" label="一级公司" width="125"></el-table-column>
        <el-table-column prop="companyLabel" label="一级公司名称" width="100"></el-table-column>
        <el-table-column prop="deptId" label="二级部门" width="125"></el-table-column>
        <el-table-column prop="deptLabel" label="二级部门名称" width="100"></el-table-column>
        <el-table-column prop="createId" label="创建人ID" width="125"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="100"></el-table-column>
        <el-table-column prop="createName" label="创建人姓名" width="125"></el-table-column>
        <el-table-column prop="checkTime" label="审批通过" width="125"></el-table-column>
        <el-table-column prop="formatId" label="业态编号" width="125"></el-table-column>
        <el-table-column prop="formatName" label="业态名称" width="125"></el-table-column>
        <el-table-column prop="parentId" label="父级编号" width="125"></el-table-column>
        <el-table-column prop="interfaceDate" label="接口获取日期" width="100"></el-table-column>
      </template>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      class="f-fr pagination"
      v-show="total>0"
      :current-page.sync='page_arg.page_index'
      :layout="page_arg.layout"
      :total="total"
      @current-change='handleCurrentChange'
      @size-change='handleSizeChange' />
  </section>
</template>

<script>
export default {
  data () {
    let vm = this

    return {
      loading: true,
      collectTabelData: [],
      tableFlag: false,
      collectDate: [],
      dataInfoId: null,
      tableTypeTemp: null,  // 承接
      tableType: vm.queryParams.type,

      btnDisabled: false,

      // 分页参数 - 默认参数
      page_arg: {
        page_index: 1, // 当前位于哪页
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      },
    }
  },

  props: {
    total: {
      type: Number,
      default: 1
    },
    queryParams: {
      type: Object,
      default: ()=>{}
    }
  },

  methods: {
    /**
     * tools
     */
    // 页面主入口
    resetTable(tabelData, id) {
      // console.log("分页参数 total", this.total)
      // console.log('resetTable', tabelData, id)

      if(tabelData) {
        this.loading = false
        this.btnDisabled = false

        this.dataInfoId = id,
        this.collectTabelData = tabelData
      }
    },

    /**
     * 分页
     */
    // 点击页码
    handleCurrentChange(pageNum) {
      // console.log("点击页码", pageNum)

      this.queryParams.pageNum = pageNum
      this.handleQuery()
    },
    // 设置每页条数
    handleSizeChange(pageSize) {
      // console.log("设置每页条数", page_size)

      this.queryParams.pageSize = pageSize
      this.handleQuery()
    },

    /**
     * 控件回调
     */
    // 时间选择器
    getQueryDate(val) {
      // console.log(val)

      if(val) {
        this.queryParams.startTime = val[0]  // 开始时间
        this.queryParams.endTime = val[1]
      } else {
        this.queryParams.startTime = undefined
        this.queryParams.endTime = undefined
      }
    },
    // 下拉
    selectRecord(val) {
      this.tableTypeTemp = val
    },

    /**
     * 业务
     */
    // 查询
    handleQuery() {
      this.loading = true

      let timer = setTimeout(()=> {
        this.tableType = this.tableTypeTemp  // 查询的时候才进行切换

        clearTimeout(timer)
      }, 500)

      this.btnDisabled = true

      let obj = {
        dataInfoId: this.dataInfoId,
        queryParams: this.queryParams
      }

      let tableCont = document.querySelector('.table_cont')
      tableCont.scrollTop = 0

      this.$emit('handleQuery', obj)
    },
    // 重置
    resetQuery() {
      // console.log(this.collectTabelData)

      this.collectDate = [],
      this.queryParams = {
        pageNum: 1,
        pageSize: 10,
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.search_wrap {
  margin-bottom: 26px;

  .el-select {
    width: 130px;
    margin-left: 35px;
  }

  .btn_wrap {
    display: inline;
    margin-left: 69px;
  }
}

.el-table {
  margin-bottom: 20px;
  max-height: 255px;
  overflow-y: auto;

  ::v-deep .el-table__header-wrapper, ::v-deep .el-table__body-wrapper {
    .cell {
      text-align: center;
    }
  }
}
</style>
