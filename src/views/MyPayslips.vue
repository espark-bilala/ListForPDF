<template>
  <div>
    <div class="inner">
      {{ activeTab }}
      <div class="tabs">
        <button
          class="tab-btn ml-6"
          :class="activeTab == 'EUR' ? 'active' : ''"
          v-on:click="activeTab = 'EUR'"
        >
          EUR
        </button>
        <button
          class="tab-btn"
          :class="activeTab == 'USD' ? 'active' : ''"
          v-on:click="activeTab = 'USD'"
        >
          USD
        </button>
      </div>
    </div>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2"> </b-button>
      </template>
      <template #cell(payrollDate)="row">
        <div @click="row.toggleDetails">
          {{ row.item.payrollDate }}
        </div>
      </template>
      <template #cell(file)="row">
        <div @click="row.toggleDetails">
          {{ row.item.fileAttachment.file.label }}
        </div>
      </template>
      <template #cell(gross_salary)="row">
        <div @click="row.toggleDetails">
          {{
            amountCurrenyFormat(
              row.item.payslipEntries.find((r) => r.key == "GROSS")
            )
          }}
        </div>
      </template>
      <template #cell(net_pay)="row">
        <div @click="row.toggleDetails">
          {{
            amountCurrenyFormat(
              row.item.payslipEntries.find((r) => r.key == "NET PAY")
            )
          }}
        </div>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <iframe
              :id="row.item.fileAttachment.id"
              :src="'../' + row.item.fileAttachment.accessToken + '.pdf'"
              width="800"
              height="800"
            >
            </iframe>
          </b-row>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
import myData from "../assets/file/payslips.json";
export default {
  data() {
    return {
      activeTab: "EUR",
      fields: [
        { key: "number", label: "#" },
        { key: "payrollDate", label: "Month" },
        { key: "file", label: "Payslips" },
        { key: "gross_salary", label: "Gross salary" },
        { key: "net_pay", label: "Net pay" },
      ],
      items: myData,
    };
  },
  mounted() {
    this.sortData();
  },
  methods: {
    sortData() {
      let d = myData;
      console.log(d);
    },
    amountCurrenyFormat(r) {
      return `${r.amount.toFixed(2)} ${r.currency}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.section {
  border-width: 2px;
  margin: 6%;
}
.inner {
  //     margin-left: -5px;
  // margin-right: -5px;
  background-color: #001738;
  border-radius: 11px 28px 28px 11px;
  height: 61px;
}
.tabs {
  .tab-btn {
    background-color: #001738;
    color: white;
    width: 84px;
    height: 61px;
    padding: 10px;
  }
  .tab-btn:hover {
    background-color: orange;
  }
  .active {
    background-color: orange;
  }
}
.section {
  overflow-y: auto;
  border-width: 2px;
  margin: 15%;
  background-color: white;
  height: 300px;
}
// .section[data-v-616d93f2] {
//     overflow-y: auto;
//     border-width: 2px;
//     margin: 15%;
//     height: 300px;
// }
</style>
