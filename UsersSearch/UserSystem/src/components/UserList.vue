<script setup>
</script>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import axios from "axios";
interface User {
  username: String
  registerDate: String
  email: String
  lastUpdatedTime:String
}
let tableData: User[] =  [{
 username: 'Tom',
    registerDate: '2016-05-03',
    email: '123',
    lastUpdatedTime:'1341',
  },
  ]
const search = ref('')
 const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.username.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}


// do for search
const input = ref('123')
function searchButton() {
  console.log(input.value);
  //发送request向server
  axios.post("http://localhost:8080/search").then(
  (response) =>  {
    // the data of response is type of javascript notation
      console.log(response)
      //把server返回的数据进行处理,封装成User的格式,并放入前面的filterTableData
      tableData.push({
        username: 'Tom',
    registerDate: '2016-05-03',
    email: '123',
    lastUpdatedTime:'1341',
      });
      
  
//   filterTableData = computed(() =>
//   tableData.filter(
//     (data) =>
//       // !search.value ||
//       // data.name.toLowerCase().includes(search.value.toLowerCase())
//       true
//   )
// )
// 快速改变搜索,为了让reactive的filterTableData做出响应,更新table内容
search.value="1";
search.value="";

    }
  ).catch((error) => {window.alert(error)}).finally(window.alert("finish"));

}
</script>
<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <el-header height="60px">
        <el-row>
          <el-col :span="22">
            <el-input v-model="input" placeholder="Please input the keyword which you want to search" />

            <div class="grid-content ep-bg-purple" />
          </el-col>
          <el-col :span="2"><el-button size="large" :icon="Search" round v-on:click="searchButton()">Search</el-button>
            <div class="grid-content ep-bg-purple-light" />
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table :data="filterTableData" style="width: 100%" height="350px">
          <el-table-column label="username" prop="username" />
          <el-table-column label="e-mail" prop="email" />
          <el-table-column label="registerDate" prop="registerDate" />
          <el-table-column label="LastUpdatedTime" prop="lastUpdatedTime" />
          <el-table-column align="right">
            <template #header>
              <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped></style>
