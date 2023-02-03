<template>
  <el-tooltip class="block" effect="light" placement="top-start">
    <!-- 多行 -->
    <div slot="content">
      <!-- 提示信息 -->
      <slot name="info" />
    </div>
    <!-- 文本 -->
    <slot name="btn" />
  </el-tooltip>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.block {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  opacity: 1;
  background: $normalColor;
  cursor: pointer;
  // overflow: hidden;
  padding: 0;
  margin: 0;
  transform: initial;
  // border: none;
  transition: 0.2s linear;

  ::v-deep b {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: initial;
    color: #ffffff;
  }

  &:hover {
    opacity: 1;
    transition: 0.2s linear;
    background: $normalHoverColor;

    ::v-deep span {
      .blank, .blank1, .blank2 {
        opacity: 1;
        transition: 0.2s linear;
        background: $normalHoverColor;
      }
    }
  }

  &.soon {
    background: $soonColor;

    &:hover {
      background: $soonHoverColor;

      ::v-deep span {
        .blank, .blank1, .blank2 {
          background: $soonHoverColor;
        }
      }
    }
  }

  &.empty {
    background: $emptyColor;

    &:hover {
      background: $emptyHoverColor;

      ::v-deep span {
        .blank, .blank1, .blank2 {
          background: $emptyHoverColor;
        }
      }
    }
  }
}
</style>
