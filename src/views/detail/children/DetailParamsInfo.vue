<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <p>参数信息</p>
    <table
      class="info-size"
      v-for="(table, index) in paramsInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>

    <table class="info-params">
      <tr v-for="(info, index) in paramsInfo.infos" :key="index">
        <td class="info-params-key">{{ info.key }}</td>
        <td class="params-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  components: {},
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.params-info {
  font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.params-info p {
  font-size: 15px;
  margin-bottom: 10px;
  color: #ff6b87;
  font-weight: 700;
}

.params-info table {
  width: 100%;
  border-collapse: collapse;
}

.params-info table tr {
  height: 42px;
}

.params-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-params {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.info-params-key {
  width: 95px;
}

.params-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>