# 使用 Stream 流处理标签集合

## 问题分析

在 `SysArticleServiceImpl.java` 文件中，有以下代码：

```java
List<TagNameIdListVO> tags = sysTagMapper.getTagNameByArticleIdTwo(id);
sysArticleDetailVo.setTags(tags);
```

这段代码存在类型不匹配的问题：
- `sysArticleDetailVo.setTags()` 方法期望接收 `List<String>` 类型的参数
- 但 `tags` 变量是 `List<TagNameIdListVO>` 类型

同时，根据 `SysArticleDetailVo` 类的定义，还需要设置 `tagIds` 字段，类型为 `List<Integer>`。

## 修复方案

使用 Stream 流从 `List<TagNameIdListVO>` 中提取所需的字段：

1. **提取标签名称**：使用 Stream 流从 `tags` 中提取 `name` 字段，生成 `List<String>`
2. **提取标签 ID**：使用 Stream 流从 `tags` 中提取 `id` 字段，生成 `List<Integer>`
3. **设置到对应的字段**：将提取的集合分别设置到 `sysArticleDetailVo` 的 `tags` 和 `tagIds` 字段

## 具体修改

修改 `SysArticleServiceImpl.java` 文件中的 `detail` 方法：

```java
@Override
public SysArticleDetailVo detail(Integer id) {
    SysArticle sysArticle = baseMapper.selectById(id);

    SysArticleDetailVo sysArticleDetailVo = new SysArticleDetailVo();
    BeanUtils.copyProperties(sysArticle, sysArticleDetailVo);

    SysCategory sysCategory = sysCategoryMapper.selectById(sysArticle.getCategoryId());
    sysArticleDetailVo.setCategoryName(sysCategory.getName());

    //获取标签
    List<TagNameIdListVO> tags = sysTagMapper.getTagNameByArticleIdTwo(id);
    
    // 使用 Stream 流提取标签名称和 ID
    List<String> tagNames = tags.stream()
            .map(TagNameIdListVO::getName)
            .collect(Collectors.toList());
    
    List<Integer> tagIds = tags.stream()
            .map(TagNameIdListVO::getId)
            .collect(Collectors.toList());
    
    // 设置标签名称和 ID
    sysArticleDetailVo.setTags(tagNames);
    sysArticleDetailVo.setTagIds(tagIds);
    
    return sysArticleDetailVo;
}
```

## 注意事项

1. **添加导入语句**：需要导入 `java.util.stream.Collectors` 类

2. **空值处理**：如果 `tags` 为 null，Stream 操作会抛出 NullPointerException，建议添加空值检查

3. **性能考虑**：对于少量标签数据，Stream 流的性能开销可以忽略不计

## 预期效果

- `sysArticleDetailVo.tags` 字段将正确存储标签名称集合
- `sysArticleDetailVo.tagIds` 字段将正确存储标签 ID 集合
- 类型不匹配的问题将被解决
- 代码更加简洁和可读性更高