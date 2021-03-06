/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import styled from 'styled-components'
import { Link } from '../Link'
import { Paragraph } from '../Text'
import { TooltipProps } from './Tooltip'
export const TooltipContent = styled(Paragraph).attrs(
  (props: TooltipProps) => ({
    fontSize: 'xsmall',
    lineHeight: 'xsmall',
    m: 'none',
    maxWidth: props.width,
    p: 'xsmall',
    width: 'auto',
  })
)`
  hyphens: auto;
  overflow-wrap: anywhere;
  text-transform: none;
  white-space: normal;
  word-break: break-word;

  ${Link} {
    color: ${(props) => props.theme.colors.keyAccent};
    text-decoration: underline;

    &:focus,
    &:hover {
      color: ${(props) => props.theme.colors.keySubtle};
    }

    &:active {
      color: ${(props) => props.theme.colors.keyText};
    }
  }
`

TooltipContent.defaultProps = { textAlign: 'center', width: '16rem' }
