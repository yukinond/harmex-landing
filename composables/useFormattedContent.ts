import { computed } from 'vue'

export const useFormattedContent = (article: any) => {
    const formatParagraph = (para: any): string => {
        let formattedText = para.text.replace(/\n/g, '<br>') 
        const markers: { position: number; tag: string }[] = []
      
        const addMarkers = (formatArray: any[], tag: string) => {
          formatArray.forEach(({ start, end }) => {
            markers.push({ position: start, tag: `<${tag}>` })
            markers.push({ position: end, tag: `</${tag}>` })
          })
        }
      
        addMarkers(para.bold || [], 'b')
        addMarkers(para.italic || [], 'i')
        addMarkers(para.underline || [], 'u')
      
        markers.sort((a, b) => a.position - b.position)
      
        let offset = 0
        markers.forEach(({ position, tag }) => {
          formattedText =
            formattedText.slice(0, position + offset) + tag + formattedText.slice(position + offset)
          offset += tag.length
        })
      
        return formattedText
    }

  const formattedContent = computed(() => {
    if (article?.sections) {
      return article.sections.map((section: any) => ({
        subheading: section.subheading,
        headingClass: section.headingClass,
        class: section.class || 'default-block',
        content: section.content.map((para: any) => ({
          text: formatParagraph(para),
          class: para.class || 'default-text',
        })),
      }))
    }
    return []
  })

  const getHeadingClass = (className: string) => {
    const headingClassMap: Record<string, string> = {
      'h1-default': 'text-3xl font-normal',
      'h2-default': 'text-2xl font-normal',
      'h3-default': 'text-xl font-normal',
      'h1-bold': 'text-3xl font-bold',
      'h2-bold': 'text-2xl font-bold',
      'h3-bold': 'text-xl font-bold',
    }
    return headingClassMap[className] || headingClassMap['h2-default']
  }

  const getClass = (className: string) => {
    const classMap: Record<string, string> = {
      'violation-list': 'text-[18px] leading-[28px] font-[400] text-black list-disc pl-0',
      'step-list': 'text-[18px] leading-[28px] font-[400] text-black list-decimal pl-0',
      default: 'text-[18px] leading-[28px] font-[400] text-[#1D1D1D]',
      comment: "border-l-[1px] border-[#E86B35] p-4 before:content-['«'] after:content-['»'] comment",
      'block-blue': 'bg-[#E4F4FF] p-4 rounded-none',
      'block-yellow': 'bg-[#FFFAE4] p-4 rounded-none',
      'block-red': 'bg-[#FFE4F2] p-4 rounded-none',
    }
    return classMap[className] || classMap['default']
  }

  return { formattedContent, getHeadingClass, getClass, formatParagraph }
}
