<script setup>

</script>

<template>
    <div class="common-layout" size="1000px">
        <el-container>
            <el-header>
                <el-row :gutter="0">
                    <el-col :span="1">
                        <div class="grid-content ep-bg-purple" />
                        <el-row class="mb-4">
                            <el-button type="info"> <router-link to="/userlist">UserList</router-link></el-button>
                        </el-row>
                    </el-col>
                </el-row>

            </el-header>
        </el-container>
    </div>
</template>

<style scoped>

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
