<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">
        {{ goods.discount }}
      </span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
        v-if="goods.services[index - 1].icon"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  components: {},
  props: {
    goods: {
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
.base-info {
  width: 100%;
  margin-top: 15px;
  padding: 0 10px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  text-align: justify;
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: #ff5777;
}

.info-price .o-price {
  font-size: 15px;
  margin-left: 15px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 12px;
  position: relative;
  top: -4px;
  margin-left: 5px;
  padding: 3px 6px;
  color: #fff;
  border-radius: 8px;
  background-color: #ff5777;
}

.info-other {
  font-size: 13px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-service {
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-service img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}

.info-service span {
  font-size: 13px;
  margin-left: 5px;
  color: #333;
}
</style>