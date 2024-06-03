<template>
  <div ref="container" class="univer-container" />
</template>

<script setup lang="ts">
import { Univer, UniverInstanceType, Workbook, LocaleType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { zhCN, enUS } from 'univer:locales'

const { data } = defineProps({
  // workbook data
  data: {
    type: Object,
    default: () => ({}),
  },
});

const univerRef = ref<Univer | null>(null);
const workbook = ref<Workbook | null>(null);
const container = ref<HTMLElement | null>(null);

onMounted(() => {
  init(data);
});

onBeforeUnmount(() => {
  destroyUniver();
});

/**
 * Initialize univer instance and workbook instance
 * @param data {IWorkbookData} document see https://univer.work/api/core/interfaces/IWorkbookData.html
 */
const init = (data = {}) => {
  const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.ZH_CN,
    locales: {
      [LocaleType.ZH_CN]: zhCN,
      [LocaleType.EN_US]: enUS,
    },
  });
  univerRef.value = univer;


  // core plugins
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverFormulaEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, {
    container: container.value!,
  });

  // doc plugins
  univer.registerPlugin(UniverDocsPlugin, {
    hasScroll: false,
  });
  univer.registerPlugin(UniverDocsUIPlugin);

  // sheet plugins
  univer.registerPlugin(UniverSheetsPlugin);
  univer.registerPlugin(UniverSheetsUIPlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin);

  // create workbook instance
  univer.createUnit(UniverInstanceType.UNIVER_SHEET, data)
};

/**
 * Destroy univer instance and workbook instance
 */
const destroyUniver = () => {
  univerRef.value?.dispose();
  univerRef.value = null;
  workbook.value = null;
};

/**
 * Get workbook data
 */
const getData = () => {
  if (!workbook.value) {
    throw new Error('Workbook is not initialized');
  }
  return workbook.value.save();
};

defineExpose({
  getData,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.univer-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Also hide the menubar */
:global(.univer-menubar) {
  display: none;
}
</style>
